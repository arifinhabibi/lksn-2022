<div class="entry-summary">
<?php if ( ( has_post_thumbnail() ) && ( !is_search() ) ) : ?>
<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail(); ?></a>
<?php endif; ?>
<div class="title">
    <a style="text-decoration: none; color: black;" href="<?= $post->guid; ?>"><?= the_title(); ?></a>   
</div>
<?php if ( is_search() ) { ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
<?php } ?>
</div>