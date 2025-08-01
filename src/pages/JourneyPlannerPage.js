
import React, { useState } from 'react';
import { FiUpload, FiMap, FiShoppingBag, FiSearch, FiHome, FiPackage, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

function JourneyPlannerPage() {
    const [selectedTask, setSelectedTask] = useState(null);
    const [customTask, setCustomTask] = useState('');
    const [showMap, setShowMap] = useState(false);
    const handleTaskSelection = (task) => {
        setSelectedTask(task);
        setShowMap(false);
    };

    const handleCustomTaskChange = (e) => {
        setCustomTask(e.target.value);
    };

    const handleStartJourney = () => {
        if (selectedTask || customTask) {
            setShowMap(true);
        }
    };

    const taskCards = [
        { id: 'find-items', title: 'Find specific items', icon: <FiSearch className="h-6 w-6" /> },
        { id: 'explore-offers', title: 'Explore offers', icon: <FiShoppingBag className="h-6 w-6" /> },
        { id: 'room-ideas', title: 'Get room setup ideas', icon: <FiHome className="h-6 w-6" /> },
        { id: 'pickup', title: 'Pick up my online order', icon: <FiPackage className="h-6 w-6" /> }
    ];

    // Dummy recommendations based on task
    const getRecommendations = () => {
        if (selectedTask === 'find-items') {
            return ["Kitchenware - Aisle 3", "Home Decor - Aisle 7", "Furniture - Aisle 12"];
        } else if (selectedTask === 'explore-offers') {
            return ["Today's Deals - Front Display", "Seasonal Offers - Aisle 5", "Clearance - Back Wall"];
        } else if (selectedTask === 'room-ideas') {
            return ["Showroom Area - Floor 2", "Interior Design Center - Aisle 9", "Home Solutions - Aisle 11"];
        } else if (selectedTask === 'pickup') {
            return ["Customer Service - Front Entrance", "Pickup Counter - Right Side of Entrance"];
        } else if (customTask.toLowerCase().includes('bedroom')) {
            return ["Bedroom Furniture - Aisle 8", "Bedding - Aisle 6", "Lighting - Aisle 4"];
        } else {
            return ["Main Entrance", "Information Desk", "Customer Service"];
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen flex flex-col gradient-bg font-['Inter',sans-serif]">
            <Header />

            <main className="flex-grow py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-8 md:p-14"
                >

                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d4d] mb-4 tracking-tight">Plan Your Store Visit</h1>
                        <p className="text-xl text-[#6b6b8d] font-light">We'll guide you aisle by aisle.</p>
                        <div className="w-20 h-1 bg-[#ff6b9a] mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {!showMap ? (
                            <motion.div
                                key="planning"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            >
                                {/* Inspirational Quote */}
                                <motion.div
                                    variants={itemVariants}
                                    className="mb-10 text-center italic text-[#6b6b8d] font-light"
                                >
                                    <p>"A spark in the everyday, grace in every step of your journey."</p>
                                </motion.div>

                                {/* Task Input Section */}
                                <motion.div variants={itemVariants} className="mb-12">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full p-5 border-2 border-[#e4e8ff] rounded-2xl text-lg focus:outline-none focus:border-[#6b7aff] transition-colors bg-white/50"
                                            placeholder="What brings you here today? (e.g. I want to redecorate my bedroom)"
                                            value={customTask}
                                            onChange={handleCustomTaskChange}
                                        />
                                    </div>
                                </motion.div>

                                {/* Suggested Task Cards */}
                                <motion.div variants={itemVariants} className="mb-14">
                                    <h2 className="text-xl font-medium text-[#2d2d4d] mb-5">Or choose from common goals:</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                        {taskCards.map((card) => (
                                            <motion.button
                                                key={card.id}
                                                className={`flex flex-col items-center justify-center p-7 rounded-2xl transition-all duration-300 
                          ${selectedTask === card.id
                                                    ? 'bg-[#f0f2ff] border-2 border-[#6b7aff] shadow-sm'
                                                    : 'bg-white/50 border-2 border-[#e4e8ff] hover:border-[#6b7aff]'}`}
                                                onClick={() => handleTaskSelection(card.id)}
                                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            >
                                                <div className={`mb-4 ${selectedTask === card.id ? 'text-[#6b7aff]' : 'text-[#8a8a9d]'}`}>
                                                    {card.icon}
                                                </div>
                                                <span className={`text-center font-medium ${selectedTask === card.id ? 'text-[#6b7aff]' : 'text-[#8a8a9d]'}`}>
                          {card.title}
                        </span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Upload Photo Option */}
                                <motion.div
                                    variants={itemVariants}
                                    className="mb-14 p-8 border-2 border-dashed border-[#e4e8ff] rounded-2xl text-center bg-white/50"
                                    whileHover={{ borderColor: "#6b7aff", transition: { duration: 0.2 } }}
                                >
                                    <div className="flex flex-col items-center">
                                        <FiUpload className="h-8 w-8 text-[#6b7aff] mb-3" />
                                        <p className="text-[#6b6b8d] mb-4">Upload a photo of your room or product to match</p>
                                        <button className="px-5 py-2.5 bg-white text-[#6b7aff] rounded-xl font-medium border border-[#6b7aff] hover:bg-[#f0f2ff] transition-colors">
                                            Choose File
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Start Journey Button */}
                                <motion.div variants={itemVariants} className="text-center">
                                    <motion.button
                                        className="px-10 py-4 bg-[#6b7aff] text-white rounded-xl font-medium hover:bg-[#5666ff] transition-colors shadow-md disabled:bg-[#e0e0e0] disabled:text-[#9e9e9e] disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                                        onClick={handleStartJourney}
                                        disabled={!selectedTask && !customTask}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Start My Journey</span>
                                        <FiArrowRight />
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="results"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            >
                                {/* Store Map & Recommendations */}
                                <div className="mb-12">
                                    <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-bold text-[#2d2d4d]">Your Personalized Store Guide</h2>
                                        <button
                                            className="text-[#6b7aff] hover:text-[#5666ff] flex items-center gap-2"
                                            onClick={() => setShowMap(false)}
                                        >
                                            Modify Plan
                                        </button>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="p-10 bg-[#f0f2ff] rounded-2xl mb-10 flex items-center justify-center"
                                    >
                                        <div className="text-center">
                                            <FiMap className="h-32 w-32 text-[#6b7aff] mx-auto mb-5" />
                                            <p className="text-lg text-[#6b6b8d] mb-2">Store Map Visualization</p>
                                            <p className="text-sm text-[#8a8a8a]">Based on: {selectedTask ? taskCards.find(t => t.id === selectedTask).title : customTask}</p>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mb-10">
                                        <h3 className="text-xl font-medium text-[#3d3d3d] mb-5">Recommended Path</h3>
                                        <div className="space-y-4">
                                            {getRecommendations().map((rec, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="p-5 bg-[#f0f2ff] rounded-xl flex items-center"
                                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                                >
                          <span className="w-10 h-10 flex items-center justify-center bg-[#6b7aff] rounded-full text-white font-medium mr-4">
                            {index + 1}
                          </span>
                                                    <span className="text-[#3d3d3d]">{rec}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="text-center">
                                        <motion.div className="text-[#6b6b8d] italic mb-6 font-light">
                                            <p>"Strength in stillness, purpose in every step."</p>
                                        </motion.div>
                                        <motion.button
                                            className="px-10 py-4 bg-[#6b7aff] text-white rounded-xl font-medium hover:bg-[#5666ff] transition-colors shadow-md flex items-center gap-2 mx-auto"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>Send to My Phone</span>
                                            <FiArrowRight />
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </main>

            <Footer />
        </div>
    );
}

export default JourneyPlannerPage;