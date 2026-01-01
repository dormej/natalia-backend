/**
 * project-group controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
    'api::project-group.project-group',
    () => ({
        async findBySlug(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db
            .query('api::project-group.project-group')
            .findOne({
            where: { slug },
            populate: {
                projects: {
                populate: ['image'],
                },
                image: true,
            },
            });

        if (!entity) {
            return ctx.notFound('Project group not found');
        }

        const dto = {
            id: entity.id,
            title: entity.title,
            slug: entity.slug,
            image: entity.image,
            projects: entity.projects?.map((p) => ({
                id: p.id,
                index: p.index,
                title: p.title,
                slug: p.slug,
                image: p.image,
                description: p.description,
                image_position: p.image_position,
                title_position: p.title_position
            })) || [],
        };

        return dto;
        },
    })
);

