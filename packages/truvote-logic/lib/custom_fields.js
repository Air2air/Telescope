import React, { PropTypes, Component } from 'react'; // used to load Tags component
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import Posts from 'meteor/nova:posts';
import Tags from 'meteor/nova:forms-tags';
import Categories from "meteor/nova:categories";
import PublicationUtils from 'meteor/utilities:smart-publications';

// users permissions
const canInsertUser = user => Users.canDo(user, "users.new");

// posts permissions
const canInsertPost = user => Users.canDo(user, "posts.new");
const canEditAllPosts = user => Users.canDo(user, "posts.edit.all");

// shorthand for editing a doc
const canEdit = Users.canEdit;

// users fields
Users.addField(
  {
    fieldName: 'location',
    fieldSchema: {
      type: String,
      insertableIf: canInsertUser,
      editableIf: canEdit,
      publish: true,
      control: "select", // use a select form control
      autoform: {
        options: function () { // options for the select form control
          return Telescope.settings.get('truVote').locations;
        }
      },
      optional: true, // simple-schema property: let the account being created
      required: true, // nova property: make the popup to show after sign up
    }
  }
);
PublicationUtils.addToFields(Users.publishedFields.list, ["location"]);

// posts fields
Posts.addField([
  {
    fieldName: 'location',
    fieldSchema: {
      type: String,
      insertableIf: canInsertPost,
      editableIf: canEditAllPosts,
      publish: true,
      optional: true,
      hidden:true
    }
  },
  // overwrite categories field to add the Tags control
  {
    fieldName: 'categories',
    fieldSchema: {
      type: [String],
      control: Tags,
      optional: true,
      insertableIf: canInsertPost,
      editableIf: canEdit,
      autoform: {
        options: function () {
          const categories = Categories.find().map(function (category) {
            return {
              value: category._id,
              label: category.name
            };
          });
          return categories;
        }
      },
      publish: true,
      join: {
        joinAs: "categoriesArray",
        collection: () => Categories
      }
    }
  }
]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["location", "categories"]);