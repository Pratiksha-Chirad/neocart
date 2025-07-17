import React from 'react';
import Header from '../components/dashboard/Header';
import FloatingBlobs from '../components/dashboard/FloatingBlobs';
import PurchaseCard from '../components/dashboard/PurchaseCard';
import AlertCard from '../components/dashboard/AlertCard';
import DeviceStatus from '../components/dashboard/DeviceStatus';
import PredictionItem from '../components/dashboard/PredictionItem';
import VirtualAssistant from '../components/dashboard/VirtualAssistant';
import Footer from "../components/Home/Footer";

const PostPurchaseDashboard = () => {
  // Sample data for purchase cards
  const purchaseData = [
    {
      name: "Samsung EcoBubble WF45K6200AW",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20washing%20machine%20white%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=wash1&orientation=landscape",
      status: "All Good",
      purchaseDate: "March 15, 2024"
    },
    {
      name: "LG InstaView ThinQ Refrigerator",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20refrigerator%20stainless%20steel%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=fridge1&orientation=landscape",
      status: "Update Needed",
      purchaseDate: "January 8, 2024"
    },
    {
      name: "Daikin Inverter Split AC",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20air%20conditioner%20white%20wall%20mounted%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=ac1&orientation=landscape",
      status: "Maintenance Due",
      purchaseDate: "November 22, 2023"
    },
    {
      name: "Sony Bravia XR A80J OLED",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20television%204K%20OLED%20black%20screen%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=tv1&orientation=landscape",
      status: "All Good",
      purchaseDate: "February 14, 2024"
    },
    {
      name: "Bosch 800 Series Dishwasher",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20dishwasher%20stainless%20steel%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=dish1&orientation=landscape",
      status: "Update Needed",
      purchaseDate: "April 3, 2024"
    },
    {
      name: "Panasonic Inverter Microwave",
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20microwave%20oven%20stainless%20steel%20clean%20minimalist%20background%20product%20photography%20studio%20lighting&width=300&height=200&seq=micro1&orientation=landscape",
      status: "All Good",
      purchaseDate: "May 18, 2024"
    }
  ];

  // Sample data for alert cards
  const alertData = [
    {
      type: "red",
      icon: "ri-alarm-warning-line",
      title: "Filter Replacement Needed",
      description: "Your AC filter needs replacement for optimal performance",
      buttonText: "Order Filter",
      buttonAction: () => console.log("Order filter")
    },
    {
      type: "yellow",
      icon: "ri-download-line",
      title: "Software Update Available",
      description: "New features and security improvements for your fridge",
      buttonText: "Update Now",
      buttonAction: () => console.log("Update now")
    },
    {
      type: "green",
      icon: "ri-information-line",
      title: "Energy Efficiency Tip",
      description: "Your washing machine is performing 15% better than average",
      buttonText: "View Details",
      buttonAction: () => console.log("View details")
    },
    {
      type: "blue",
      icon: "ri-calendar-line",
      title: "Scheduled Maintenance",
      description: "Professional cleaning recommended for your dishwasher",
      buttonText: "Schedule Service",
      buttonAction: () => console.log("Schedule service")
    }
  ];

  // Sample data for device status
  const deviceData = [
    {
      icon: "ri-washing-machine-line",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      name: "Washing Machine",
      status: "Last maintenance: 2 weeks ago",
      statusIndicator: "bg-green-400",
      buttons: [
        {
          text: "Video Help",
          bg: "bg-primary",
          textColor: "text-white",
          hoverBg: "hover:bg-primary/80",
          action: () => console.log("Video help")
        },
        {
          text: "Talk to Assistant",
          bg: "bg-gray-100",
          textColor: "text-gray-700",
          hoverBg: "hover:bg-gray-200",
          action: () => console.log("Talk to assistant")
        }
      ]
    },
    {
      icon: "ri-fridge-line",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      name: "Refrigerator",
      status: "Temperature fluctuation detected",
      statusIndicator: "bg-yellow-400",
      buttons: [
        {
          text: "Get Video Help",
          bg: "bg-primary",
          textColor: "text-white",
          hoverBg: "hover:bg-primary/80",
          action: () => console.log("Get video help")
        },
        {
          text: "Send Technician",
          bg: "bg-yellow-100",
          textColor: "text-yellow-700",
          hoverBg: "hover:bg-yellow-200",
          action: () => console.log("Send technician")
        }
      ]
    },
    {
      icon: "ri-air-conditioner-line",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      name: "Air Conditioner",
      status: "Filter replacement overdue",
      statusIndicator: "bg-red-400",
      buttons: [
        {
          text: "Order Filter",
          bg: "bg-red-600",
          textColor: "text-white",
          hoverBg: "hover:bg-red-700",
          action: () => console.log("Order filter")
        },
        {
          text: "Schedule Service",
          bg: "bg-gray-100",
          textColor: "text-gray-700",
          hoverBg: "hover:bg-gray-200",
          action: () => console.log("Schedule service")
        }
      ]
    },
    {
      icon: "ri-tv-line",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      name: "Smart TV",
      status: "Firmware 2 versions behind",
      statusIndicator: "bg-blue-400",
      buttons: [
        {
          text: "Update Firmware",
          bg: "bg-blue-600",
          textColor: "text-white",
          hoverBg: "hover:bg-blue-700",
          action: () => console.log("Update firmware")
        },
        {
          text: "Talk to Assistant",
          bg: "bg-gray-100",
          textColor: "text-gray-700",
          hoverBg: "hover:bg-gray-200",
          action: () => console.log("Talk to assistant")
        }
      ]
    }
  ];

  // Sample data for predictions
  const predictionData = [
    {
      icon: "ri-brain-line",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Temperature Optimization Insight",
      description: "Your refrigerator's temperature has fluctuated recently, affecting energy efficiency by 8%",
      confidence: 92,
      confidenceBg: "bg-blue-100",
      confidenceColor: "text-blue-700",
      buttonText: "Optimize Settings",
      buttonBg: "bg-primary",
      buttonHoverBg: "hover:bg-primary/80"
    },
    {
      icon: "ri-lightbulb-line",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Firmware Update Recommendation",
      description: "Your TV firmware is 2 versions old. New update includes security patches and performance improvements",
      confidence: 87,
      confidenceBg: "bg-yellow-100",
      confidenceColor: "text-yellow-700",
      buttonText: "Schedule Update",
      buttonBg: "bg-yellow-600",
      buttonHoverBg: "hover:bg-yellow-700"
    },
    {
      icon: "ri-leaf-line",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Energy Efficiency Alert",
      description: "Your washing machine is performing 15% better than average. Consider sharing your settings with friends",
      confidence: 95,
      confidenceBg: "bg-green-100",
      confidenceColor: "text-green-700",
      buttonText: "Share Settings",
      buttonBg: "bg-green-600",
      buttonHoverBg: "hover:bg-green-700"
    },
    {
      icon: "ri-calendar-check-line",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Maintenance Prediction",
      description: "Based on usage patterns, your dishwasher will need professional cleaning in 3 weeks",
      confidence: 89,
      confidenceBg: "bg-purple-100",
      confidenceColor: "text-purple-700",
      buttonText: "Pre-schedule Service",
      buttonBg: "bg-purple-600",
      buttonHoverBg: "hover:bg-purple-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <FloatingBlobs />
      <Header />

      <main className="relative z-10 px-6 py-8 max-w-7xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Purchases Dashboard</h1>
          <p className="text-gray-600">Smart monitoring for all your purchased items</p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchaseData.map((product, index) => (
              <PurchaseCard key={index} product={product} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proactive Alerts & Maintenance</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {alertData.map((alert, index) => (
              <AlertCard key={index} alert={alert} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Smart Home Status</h2>
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="smart-home-visual">
                <img 
                  src="https://readdy.ai/api/search-image?query=isometric%203D%20smart%20home%20interior%20kitchen%20living%20room%20modern%20appliances%20washing%20machine%20refrigerator%20air%20conditioner%20television%20dishwasher%20microwave%20clean%20minimalist%20design%20soft%20lighting&width=500&height=400&seq=smarthome1&orientation=landscape" 
                  alt="Smart Home Visualization" 
                  className="w-full h-80 object-cover object-top rounded-xl"
                />
              </div>
              <div className="space-y-4">
                {deviceData.map((device, index) => (
                  <DeviceStatus key={index} device={device} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Support Feed</h2>
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="space-y-4">
              {predictionData.map((prediction, index) => (
                <PredictionItem 
                  key={index} 
                  prediction={prediction} 
                  isLast={index === predictionData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <VirtualAssistant />
      <Footer />
    </div>
  );
};

export default PostPurchaseDashboard;