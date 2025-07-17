import React, { useState, useRef, useEffect } from 'react';

const ARNavigation = ({ searchQuery, feedbackData, setFeedbackData }) => {
    const [navigationActive, setNavigationActive] = useState(false);
    const [cameraStream, setCameraStream] = useState(null);
    const [currentDistance, setCurrentDistance] = useState(15);
    const videoRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => {
            stopCamera();
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setCameraStream(stream);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error("Camera access error:", err);
        }
    };

    const stopCamera = () => {
        if (cameraStream) {
            cameraStream.getTracks().forEach((track) => track.stop());
            setCameraStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
    };

    const toggleNavigation = async () => {
        if (navigationActive) {
            stopNavigation();
        } else {
            if (!searchQuery) {
                alert("Please search for an item first");
                return;
            }
            await startCamera();
            setNavigationActive(true);
            updateNavigationFeedback(searchQuery);
            startDistanceCountdown();
        }
    };

    const stopNavigation = () => {
        setNavigationActive(false);
        stopCamera();
        setCurrentDistance(15);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setFeedbackData({
            distance: "Ready to guide you",
            direction: "Search for an item to start navigation"
        });
    };

    const recenterView = () => {
        if (navigationActive) {
            // Simulate recentering animation
            setTimeout(() => {
                // Reset after animation
            }, 1500);
        }
    };

    const resetView = () => {
        stopNavigation();
    };

    const updateNavigationFeedback = (query = "") => {
        const lowerQuery = query.toLowerCase();
        let aisle = "General";
        let shelf = "2";

        if (lowerQuery.includes("milk") || lowerQuery.includes("egg") || lowerQuery.includes("dairy")) {
            aisle = "Dairy & Eggs";
            shelf = "1";
        } else if (lowerQuery.includes("shampoo") || lowerQuery.includes("soap") || lowerQuery.includes("personal")) {
            aisle = "Personal Care";
            shelf = "4";
        } else if (lowerQuery.includes("baby") || lowerQuery.includes("formula") || lowerQuery.includes("diaper")) {
            aisle = "Baby Products";
            shelf = "3";
        } else if (lowerQuery.includes("bread") || lowerQuery.includes("bakery")) {
            aisle = "Bakery";
            shelf = "2";
        }

        if (currentDistance > 0) {
            setFeedbackData({
                distance: `You're ${currentDistance} steps away`,
                direction: `Follow the purple arrows to ${aisle} Aisle`
            });
        } else {
            setFeedbackData({
                distance: "Destination reached! 🎉",
                direction: `${query} is on your right, shelf ${shelf}`
            });
            showConfetti();
        }
    };

    const startDistanceCountdown = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (!navigationActive) {
                clearInterval(intervalRef.current);
                return;
            }

            if (currentDistance > 0) {
                setCurrentDistance(prevDistance => {
                    const newDistance = prevDistance - 1;
                    updateNavigationFeedback(searchQuery);
                    return newDistance;
                });
            } else {
                clearInterval(intervalRef.current);
                setTimeout(() => {
                    stopNavigation();
                }, 3000);
            }
        }, 2000);
    };

    const showConfetti = () => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement("div");
                confetti.className = "confetti";
                confetti.style.left = Math.random() * 100 + "%";
                confetti.style.backgroundColor = [
                    "#8B5CF6",
                    "#06B6D4",
                    "#F59E0B",
                    "#EF4444",
                ][Math.floor(Math.random() * 4)];
                confetti.style.animationDelay = Math.random() * 3 + "s";
                document.body.appendChild(confetti);
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 100);
        }
    };

    return (
        <div className="relative">
            <div className="bg-gray-900 rounded-2xl overflow-hidden relative h-96 isometric-grid">
                {cameraStream && (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="ar-overlay absolute inset-0 flex items-center justify-center">
                    {!navigationActive && (
                        <div className="text-center text-white">
                            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-white/20 rounded-full">
                                <i className="ri-camera-line text-3xl"></i>
                            </div>
                            <p className="text-lg font-medium">Camera Ready</p>
                            <p className="text-sm text-white/80 mt-1">
                                Tap "Start Navigation" to begin AR guidance
                            </p>
                        </div>
                    )}
                </div>
                <div className={`absolute top-4 left-4 ${navigationActive ? 'bg-primary/90' : 'bg-black/50'} text-white px-3 py-2 rounded-lg text-sm`}>
                    <i className={`${navigationActive ? 'ri-navigation-fill' : 'ri-navigation-line'} mr-2`}></i>
                    {navigationActive ? 'Navigation Active' : 'Ready to navigate'}
                </div>
                <div className={`absolute inset-0 ${navigationActive ? 'block' : 'hidden'}`}>
                    <div className="arrow-path absolute top-1/2 left-1/4 transform -translate-y-1/2">
                        <i className="ri-arrow-right-line text-primary text-4xl drop-shadow-lg"></i>
                    </div>
                    <div className="arrow-path absolute top-1/3 left-1/2 transform -translate-y-1/2" style={{ animationDelay: '0.5s' }}>
                        <i className="ri-arrow-right-line text-primary text-4xl drop-shadow-lg"></i>
                    </div>
                    <div className="arrow-path absolute top-2/3 right-1/4 transform -translate-y-1/2" style={{ animationDelay: '1s' }}>
                        <i className="ri-arrow-down-line text-primary text-4xl drop-shadow-lg"></i>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
                <button
                    className={`${navigationActive ? 'bg-red-500' : 'bg-primary'} text-white px-8 py-3 rounded-button font-semibold glow-effect whitespace-nowrap !rounded-button`}
                    onClick={toggleNavigation}
                >
                    <i className={`${navigationActive ? 'ri-stop-line' : 'ri-navigation-fill'} mr-2`}></i>
                    {navigationActive ? 'Stop Navigation' : 'Start Navigation'}
                </button>
                <button
                    className="bg-white/90 text-gray-700 px-6 py-3 rounded-button font-medium border border-gray-200 whitespace-nowrap !rounded-button"
                    onClick={resetView}
                >
                    <i className="ri-refresh-line mr-2"></i>
                    Reset
                </button>
                <button
                    className="bg-white/90 text-gray-700 px-6 py-3 rounded-button font-medium border border-gray-200 whitespace-nowrap !rounded-button"
                    onClick={recenterView}
                >
                    <i className="ri-crosshair-line mr-2"></i>
                    Recenter
                </button>
            </div>
        </div>
    );
};

export default ARNavigation;
