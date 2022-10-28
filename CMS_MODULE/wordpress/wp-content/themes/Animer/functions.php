<?php  


add_action('wp_enqueue_scripts', function (){
    wp_enqueue_script('mobile', '/wp-content/themes/Animer/js/mobile.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('slider', '/wp-content/themes/Animer/js/slider.js', array('jquery'), '1.0.0', true);
});



add_action( 'init', function () { 
    register_post_type('anime', [
        'label' => 'anime',
        'public' => true
    ]);
} );

add_action( 'init', function () { 
    register_post_type('social-media', [
        'label' => 'social media',
        'public' => true
    ]);
} );
?>