<?php get_header(); ?>

<div class="anime-list">
    <h1 class="title">anime list</h1>
    <div class="grid-anime">
    <?php
                                
    $animes = get_posts([
        'post_type' => 'anime'
    ]);
    
        ?>
        <?php foreach($animes as $anime){ ?>
            <div class="anime">
           
            <a href="<?php echo $anime->post_title; ?>"><?php echo $anime->post_content; ?></a>
            </div>
        <?php }; ?>
    </div>
</div>



<?php get_footer(); ?>