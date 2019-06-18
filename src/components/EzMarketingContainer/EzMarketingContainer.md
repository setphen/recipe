---
name: EzMarketingContainer
title: Marketing container
path: '/components/ez-marketing-container'
---

Marketing containers are a specialized form of [Cards](/components/ez-card), with a specific focus on calling attention to important content. The marketing container controls the margins of the content area, the vertical spacing between content and applies larger font-sizes text content.

---

## Best Practices

Marketing containers should:

- Be used for marketing material only. Favor [EzCard](/components/ez-card) for other types of page content.
- Be used as an immediate descendant of EzPage
- Contain a maximum of one primary call-to-action per card.
- Position calls-to-action for next steps at the bottom of the card.
- Always use a heading to help identify the contents of the card at-a-glance.

Marketing containers should not:

- Be nested inside each other.

Marketing Sections should not:

- Be used outside of a Card

---

## Examples

### Marketing container usage

Used to draw attention to important marketing content.

```jsx
<EzPage>
  <EzMarketingContainer
    title="A level 1 heading to grab attention"
    subtitle="A subheading to pair with any heading"
  >
    <EzHeading size="2" subheading="A subheading to pair with any heading">
      Level 2 heading to break up sections
    </EzHeading>

    <EzHeading size="3" subheading="A more simple level 3 heading">
      Level 2 heading to break up sections
    </EzHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>

    <EzHeading size="3" subheading="A more simple level 3 heading">
      Level 2 heading to break up sections
    </EzHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>

    <p>
      <EzLink href="#">Find more information about this content</EzLink>
    </p>

    <EzLayout layout="basic">
      <EzButton use="primary">Primary Action</EzButton>
      <EzButton>Secondary Action</EzButton>
    </EzLayout>
  </EzMarketingContainer>
</EzPage>
```

---

## Related components

- [EzCard](/components/ez-card)
