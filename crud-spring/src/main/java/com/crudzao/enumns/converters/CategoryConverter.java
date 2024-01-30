package com.crudzao.enumns.converters;

import java.util.stream.Stream;
import com.crudzao.enumns.Category;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CategoryConverter implements AttributeConverter<Category, String> {

  @Override
  public String convertToDatabaseColumn(Category category) {
    if (category == null) {
      return null;
    }

    return category.getValue();
  }

  @Override
  public Category convertToEntityAttribute(String dbData) {
    if (!(dbData != null && dbData.isEmpty())) {
      return null;
    }

    // return Category.valueOf(dbData);
    return Stream.of(Category.values())
        .filter(c -> c.getValue().equals(dbData))
        .findFirst()
        .orElseThrow(IllegalArgumentException::new);

  }
}
