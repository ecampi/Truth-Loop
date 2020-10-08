//////////////////////////////////////////// OpenAPI Schema Objects ////////////////////////////////////////////

/**
 @schema IdOfCreatedObject
 description: the returned ID of a successfully created object
 type: object
 properties:
   id:
     type: integer
 */

/**
 @schema ConfirmationOfSuccess
 description: confirmation that the last operation was successful
 type: object
 properties:
   ok:
     type: boolean
 */

/**
  @schema Category
  description: A Category defines....
  type: object
  properties:
    id:
      type: integer
      readOnly: true
    name:
      type: string
    description:
      type: string
    created:
      type: timestamp
      readOnly: true
      format: date-time
      description: timestamp object first created
    updated:
      type: timestamp
      readOnly: true
      format: date-time
      description: timestamp object last updated
  required:
    - name
 */

/**
  @schema GeospatialDefinition
  description: A Geospatial Definition defines....
  type: object
  properties:
    id:
      type: integer
      readOnly: true
    name:
      type: string
    short_name_ui:
      type: string
    description:
      type: string
    created:
      type: timestamp
      readOnly: true
      format: date-time
      description: timestamp object first created
    updated:
      type: timestamp
      readOnly: true
      format: date-time
      description: timestamp object last updated
  required:
    - name
    - short_name_ui
 */