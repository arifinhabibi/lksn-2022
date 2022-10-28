<?php get_header(); ?>
<div class="main-content-single">
    <div class="post-name">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'entry' ); ?>
        <p class="content-single"><?= $post->post_content; ?></p>
        <?php endwhile; endif; ?>
        
    </div>
    <div class="sidebar">
        <?php get_sidebar() ?>
        <?php if ( comments_open() && !post_password_required() ) { comments_template( '', true ); } ?>
    </div>
</div>
<?php get_footer(); ?>