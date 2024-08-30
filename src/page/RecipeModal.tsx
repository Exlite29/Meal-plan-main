import React from 'react';

const RecipeModal: React.FC<{ recipe: any, onClose: () => void }> = ({ recipe, onClose }) => {
    // Helper function to convert YouTube URL to embed URL
    const getYouTubeEmbedUrl = (url: string) => {
        const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (videoIdMatch) {
            return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
        }
        return url; // return as is if not a YouTube URL
    };

    const isYouTube = recipe.video.includes('youtube.com') || recipe.video.includes('youtu.be');
    const videoSrc = isYouTube ? getYouTubeEmbedUrl(recipe.video) : recipe.video;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75'>
            <div className='bg-white p-4 rounded-lg shadow-lg max-w-lg w-full'>
                <div className='flex justify-between mb-4'>
                    <h2 className='text-xl font-bold  w-full'>{recipe.name}</h2>
                    <button onClick={onClose} className='text-xl'>&times;</button>
                </div>
                <div className='mb-2'>
                    {isYouTube ? (
                        <iframe
                            src={videoSrc}
                            className='w-full h-48 rounded'
                            frameBorder='0'
                            allowFullScreen
                            title={recipe.name}
                        />
                    ) : (
                        <video
                            src={videoSrc}
                            className='w-full h-48 object-cover rounded'
                            controls
                            muted
                            autoPlay
                            preload="auto"
                        />
                    )}
                </div>
                <h3 className='text-lg font-semibold mb-2'>Ingredients</h3>
                <ul className='list-disc list-inside mb-2'>
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                        <li className='text-sm' key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className='text-lg font-semibold mb-2'>Instructions</h3>
                <ul className='list-disc list-inside'>
                    {recipe.instructions.map((instruction: { action: string, time: string }, index: number) => (
                        <li className='text-sm' key={index}>
                            {instruction.action}
                            {instruction.time === '' ? '' : <span className='font-semibold ml-2'>({instruction.time})</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeModal;
