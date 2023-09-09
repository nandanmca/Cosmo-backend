import { defineField, defineType } from "sanity";
export default defineType({
name:'products',
title:'Products',
type:'document',
fields:[
    defineField({
        name:'title',
        title:'Title',
        type:'string'
    }),
    defineField({
        name:'mainImage',
        title:'image',
        type:'image',
        options:{
            hotspot:true,
        },
    }),
    defineField({
        name:'bgImage',
        title:'Bg Image',
        type:'image',
        options:{
            hotspot:true,
        },
    }),
    defineField({
        name:'productType',
        title:'Product Type',
        type:'string',
        options:{
            list:[
                {title:'Face Wash', value:'faceWash'},
                {title:'Body Lotion', value:'bodyLotion'},
                {title:'Perfumes', value:'perfumes'},
                {title:'Mouth Cleanser', value:'mouthCleanser'},
            ],
            layout:"radio"
        },
    }),
    defineField({
        name:'price',
        title:'Price',
        type:'number',
        validation:Rule => Rule.required().positive(),
        options:{}
    }),
    defineField({
        name:'categories',
        title:'Categories',
        type:'array',
        of:[{ type:'reference', to:{type:'category'}}],
    }),
    defineField({
        name:'description',
        title:'Description',
        type:'string'

    }),
    defineField({
        name:'shortDescription',
        title:'Short Description',
        type:'string'

    })


]


 })