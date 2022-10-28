<?php get_header(); ?>



<!-- content -->
<main  id="content" role="main" style="margin-top: 35px;margin-bottom: 35px; margin-left: 20px; margin-right: 20px" class="container">
    
    <div class="main-content">
        <div class="post-name">
                <h4 id="main-title" class="mb-3">
                    <span id="badge-yellow"></span>
                <?php $categories = get_the_category(); ?>
                <?php foreach($categories as $category): ?>
                    <?php echo $category->name; ?>
                <?php endforeach; ?>
            </h4>
            <hr class="divider-title">
            <div class="margins"></div>


            <!-- posts content -->
                <?php foreach($posts as $post) { ?>
                <div class="cards">
                    <div class="grid">
                        <div class="img">
                            <?php the_post_thumbnail(); ?>
                        </div>
                        <div class="content">
                            <h1><?= $post->post_title; ?></h1>
                            <p><?= the_excerpt(); ?></p>
                        </div>
                    </div>
                </div>
                <?php } ?>




            <?php get_template_part('nav', 'below'); ?>
        </div>

        <div class="sidebar">
            <?php get_sidebar() ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>