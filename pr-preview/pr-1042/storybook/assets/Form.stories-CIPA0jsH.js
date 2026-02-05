import{j as e}from"./iframe-DTLJLCqo.js";import{$ as c}from"./Form-CdS54emo.js";import{G as d}from"./Grid-DKqISFm2.js";import{G as i}from"./GridItem-MFYtwMHA.js";import{a as x,R as u}from"./Radio-DHE1KcjM.js";import{C as I}from"./CheckboxGroup-CRuCvKqu.js";import{C as G}from"./Checkbox-Bo2F5Hi2.js";import{T as t}from"./TextField-SDL8hX-H.js";import{S as l}from"./Select-DEhxQ3T9.js";import{L as p}from"./ListBoxItem-fZJWHt9Q.js";import{B as a}from"./Button-wjvYMOzu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-aQAqN8gs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DXoy3rZ6.js";import"./useFocusRing-CCXTTGcy.js";import"./index-R7zWEzuw.js";import"./index-DWROMjn1.js";import"./clsx-Ciqy0D92.js";import"./Group-dqMiXdSk.js";import"./FieldError-CveCLVTj.js";import"./Text-BVi5Ej-u.js";import"./Text-VQywqbiS.js";import"./Button-DLbZMMBE.js";import"./Hidden-Ba9IdiNq.js";import"./useLabels-C_LVKDoo.js";import"./useButton-Dm0JCrG-.js";import"./SelectionIndicator-COJaXbf_.js";import"./useField-DrzhCEc1.js";import"./VisuallyHidden-Cr5LwEwU.js";import"./useControlledState-D7_B-bjt.js";import"./Label-R8BXxaCn.js";import"./Dialog-DRhVCDqR.js";import"./RSPContexts-C0vMLaLM.js";import"./OverlayArrow-DG6HMC2P.js";import"./useResizeObserver-CCgPS4-2.js";import"./Collection-S7fflzp9.js";import"./index-D3QbyDlh.js";import"./Separator-3k9QuH-P.js";import"./SelectionManager-CVMkAKx2.js";import"./useEvent-DuEmEayB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D_-VTjQ7.js";import"./ListKeyboardDelegate-Dk3H0uLl.js";import"./PressResponder-D-Mi3XpB.js";import"./useLocalizedStringFormatter-Cpm5l6p9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YSh_JxkF.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BYwfMl4s.js";import"./createLucideIcon-ZFlUY_RU.js";import"./useLocalizedStringFormatter-BYNlIS9z.js";import"./Heading-Bc1LbtIk.js";import"./info-5A3TfLzF.js";import"./Popover-DLWdgYPb.js";import"./check-Cp8dJBW7.js";import"./useToggleState-B8fzTXYC.js";import"./TextFieldBase-CtbXGjFB.js";import"./TextField-DePVi3jt.js";import"./Input-BU141T_w.js";import"./useTextField-C_rJIOGj.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BKx6yB7W.js";import"./DragAndDrop-D3Yi6xf7.js";import"./inertValue-DRMBQ_H3.js";import"./useListState-ijfqNdIG.js";import"./Tag-_rhFW1gp.js";import"./useHighlightSelectionDescription-c5xTizu4.js";import"./useUpdateEffect-B8EAwBZf.js";import"./useHasTabbableChild-BIobIjKR.js";import"./chevron-down-BJy5-pxc.js";import"./Virtualizer-uNjHQG2j.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
