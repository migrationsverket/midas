import{j as e}from"./iframe-D_RLRaO3.js";import{$ as c}from"./Form-lzVeGsdG.js";import{G as d}from"./Grid-BYjP1wSh.js";import{G as i}from"./GridItem-BuZWGkXN.js";import{T as t}from"./TextField-B_1ts_bQ.js";import{S as l}from"./Select-DzfC11ke.js";import{B as a}from"./Button-CmlIBVdc.js";import{R as x,a as u}from"./Radio-CUqg9t-d.js";import{C as I}from"./CheckboxGroup-CYQnSN7A.js";import{C as G}from"./Checkbox-C-BVHK48.js";import{L as p}from"./ListBoxItem-C9w14eT8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BlqKQH7t.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdWaKx-M.js";import"./useFocusRing-DLvend6y.js";import"./index-BdZm9yDI.js";import"./index-CLauSptU.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DbQ6xlb-.js";import"./TextField-6-RvQsCm.js";import"./FieldError-CLCPHxAE.js";import"./Text-BuBdqt_E.js";import"./Text-B2nU6iIt.js";import"./RSPContexts-C-7yHdm5.js";import"./Group-CtrsqpQ7.js";import"./Input-CDZ0V4V8.js";import"./Hidden-DFjx3PZR.js";import"./Button-u0QZa7Fn.js";import"./useLabels-D_fUya2Q.js";import"./useButton-D0Ww05Nb.js";import"./useTextField-CNM1YrHg.js";import"./useControlledState-BFob-p1I.js";import"./useField-BcNwyeKj.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CKfxvLZ1.js";import"./Dialog-CwmWdhJm.js";import"./OverlayArrow-DXgFn0bE.js";import"./useResizeObserver-C2dZ-Udt.js";import"./Collection-BXpYpuHa.js";import"./index-Dmj2XFJ6.js";import"./Separator-B9neSB_O.js";import"./SelectionManager-BQ3woPmb.js";import"./useEvent-D1OomJ4P.js";import"./scrollIntoView-Dm-OSLLN.js";import"./SelectionIndicator-Cq7sdARx.js";import"./useDescription-MuK9kXs1.js";import"./ListKeyboardDelegate-DzNijRHj.js";import"./PressResponder-C4jhDrkT.js";import"./useLocalizedStringFormatter-DNatSRRY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DErfkRCT.js";import"./VisuallyHidden-Bv5E6YOy.js";import"./x-D4f4_rt6.js";import"./createLucideIcon-tmDJTb0C.js";import"./useLocalizedStringFormatter-B7X7aezu.js";import"./Heading-zbAesl1A.js";import"./info-B9Cq6StL.js";import"./Popover-FFmuhwtL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D2llgU5b.js";import"./DragAndDrop-F1hfAhvD.js";import"./inertValue-Bi2XF7TF.js";import"./useListState-sgMByJl4.js";import"./Tag-1jlm3yXk.js";import"./useHighlightSelectionDescription-DOgw2Y81.js";import"./useUpdateEffect-C_3Gj5gt.js";import"./useHasTabbableChild-Akb1fDV9.js";import"./chevron-down-CTFWmJW8.js";import"./Button.module-CtQ1deO8.js";import"./check-B7ARo8UR.js";import"./useToggleState-HdlOOpee.js";import"./Virtualizer-01a-yreL.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
