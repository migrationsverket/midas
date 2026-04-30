import{j as e}from"./iframe-DpTmCcsu.js";import{c}from"./Form-ZmL5cGy_.js";import{G as d}from"./Grid-0GUg7dOW.js";import{G as i}from"./GridItem-B7DgtC6v.js";import{a as x,R as u}from"./Radio-9aqj7emR.js";import{C as I}from"./CheckboxGroup-1ZnoEE43.js";import{C as G}from"./Checkbox-pcFJFnEY.js";import{T as t}from"./TextField-DjmmDjP1.js";import{S as l}from"./Select-Cd-iil4x.js";import{L as p}from"./ListBoxItem-OLR6C043.js";import{B as a}from"./Button-BML3brTK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-p-K2lh1y.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./clsx-Ciqy0D92.js";import"./Group-CjaNmGuh.js";import"./FieldError-DZQ02WXe.js";import"./Text-C2ABOPKT.js";import"./Text-DZjjFYeH.js";import"./Button-BsQKBFvZ.js";import"./Hidden-pLTvcnD_.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./SelectionIndicator-CoqMXBj6.js";import"./useField-BZUShFHQ.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./useControlledState-Du11SrDH.js";import"./Label-Cuy3kht_.js";import"./Dialog-DqnNjaJi.js";import"./RSPContexts-CDes9nfa.js";import"./OverlayArrow-C3m7dJ5y.js";import"./useResizeObserver-CX6ENk_I.js";import"./Collection-pS06VS6s.js";import"./index-BChFUTeo.js";import"./Separator-DQbe1b_J.js";import"./SelectionManager-EeeeUcvE.js";import"./useEvent-aGapLNe8.js";import"./scrollIntoView-D1143tc0.js";import"./useDescription-ZwNvLjiW.js";import"./ListKeyboardDelegate-BqFXxQy7.js";import"./PressResponder-DnodVIaB.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUfhnEHD.js";import"./getScrollParent-BTKk9p6-.js";import"./ModalOverlay-DavhYSKE.js";import"./x-Ch6sGbPf.js";import"./createLucideIcon-BVEhdOTx.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Heading-D1Oj7BSx.js";import"./info-CBNYmXvC.js";import"./Popover-DO1yXugR.js";import"./check-XFxp686h.js";import"./useToggleState-8zRGcaxf.js";import"./TextFieldBase-dNtwCqp1.js";import"./Input-Dmb9VKDV.js";import"./useTextField-y31WfOTf.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BbrW9Ju0.js";import"./DragAndDrop-BXDx-znm.js";import"./inertValue-DV_eSDv9.js";import"./useListState-BAb_2lVf.js";import"./TagGroup-Dj4bH-dL.js";import"./useHighlightSelectionDescription-BmsXseLE.js";import"./useUpdateEffect-DoqCHROH.js";import"./useHasTabbableChild-CEeaKsE3.js";import"./chevron-down-CUeqUKYs.js";import"./Virtualizer-BuQHKKLh.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
