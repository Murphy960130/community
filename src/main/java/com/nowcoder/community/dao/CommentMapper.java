package com.nowcoder.community.dao;

import com.nowcoder.community.entity.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

    List<Comment> selectCommentsByEntity(int entityType, int entityId, int offset, int limit);

    int selectCountByEntity(int entityType, int entityId);

    int insertComment(Comment comment);

    // user评论的帖子
    List<Comment> selectCommentsByUserId(int userId, int entityType, int offset, int limit);

    // user评论的帖子的个数
    int selectCountByUserId(int userId, int entityType);

    Comment selectCommentById(int id);
}
