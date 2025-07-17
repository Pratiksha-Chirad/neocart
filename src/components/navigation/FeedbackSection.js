import React from 'react';

const FeedbackSection = ({ feedbackData }) => {
    return (
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                    <i className="ri-footprint-line text-primary text-xl"></i>
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {feedbackData.distance}
                    </p>
                    <p className="text-gray-600">
                        {feedbackData.direction}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;