package com.crudzao.enumns.converters;

import com.crudzao.enumns.Status;
import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class StatusConverter implements AttributeConverter<Status, String> {

  @Override
  public String convertToDatabaseColumn(Status value) {
    if (value == null) {
      return null;
    }
    return value.getValue();
  }

  @Override
  public Status convertToEntityAttribute(String value) {
    if (value == null) {
      return null;
    }

    return Stream.of(Status.values())
        .filter(s -> s.getValue().equals(value))
        .findFirst()
        .orElseThrow(IllegalArgumentException::new);
  }
}
