import{j as e}from"./iframe-fp2Nog4h.js";import{$ as c}from"./Form-D5UMYNM1.js";import{G as d}from"./Grid-Ju80UJFU.js";import{G as i}from"./GridItem-zl5YG7dC.js";import{a as x,R as u}from"./Radio-c2lz6V0p.js";import{C as I}from"./CheckboxGroup-B1pxuGH7.js";import{C as G}from"./Checkbox-COJ9XleJ.js";import{T as t}from"./TextField--InHXQFE.js";import{S as l}from"./Select-D9EWFRrN.js";import{L as p}from"./ListBoxItem-Q1T3uxch.js";import{B as a}from"./Button-DtrbXpSE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8oibJ9L.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-pRLeydaA.js";import"./useFocusRing-BTvXf_Cd.js";import"./index-D6xqLboL.js";import"./index-B3h2-82A.js";import"./clsx-Ciqy0D92.js";import"./Group-CtCz0qIZ.js";import"./FieldError-B0WmEBkc.js";import"./Text-CCjcRRvg.js";import"./Text-D811-Zq9.js";import"./Button-GyiYNsJ6.js";import"./Hidden-DOc9bKY7.js";import"./useLabels-DTn6LYUg.js";import"./useButton-D94t8hrE.js";import"./SelectionIndicator-Bx8b-vTn.js";import"./useField-Cypphc-U.js";import"./VisuallyHidden-CLqMczTC.js";import"./useControlledState-BU_oUKfA.js";import"./Label-rhgf73VD.js";import"./Dialog-DNXuYuS4.js";import"./RSPContexts-BdtlfPBJ.js";import"./OverlayArrow-BUyo7LJ-.js";import"./useResizeObserver-C6vfFtJS.js";import"./Collection-BcD0ih6y.js";import"./index-DDVzHHx3.js";import"./Separator-ZYYVjjiY.js";import"./SelectionManager-BFC7ZP1t.js";import"./useEvent-BkbB1DI_.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BHRPbtLk.js";import"./ListKeyboardDelegate-D6l2r6AG.js";import"./PressResponder-Cem-oT6d.js";import"./useLocalizedStringFormatter-ANzTOMvn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0ndfuYSB.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BF2Z086_.js";import"./createLucideIcon-BdCyL4gS.js";import"./useLocalizedStringFormatter-D8zHSBgy.js";import"./Heading-BVNexJLw.js";import"./info-CgRSavl3.js";import"./Popover-v7c0C6cp.js";import"./check-BbbL4l49.js";import"./useToggleState-DFxbpI3Y.js";import"./TextFieldBase-DWdA-tFJ.js";import"./TextField-BbK1mxS7.js";import"./Input-BnYaVFSk.js";import"./useTextField-DEXLnQGY.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-msFSffCf.js";import"./DragAndDrop-CKpSc6uu.js";import"./inertValue-iI7781MI.js";import"./useListState-ikBWbNxM.js";import"./Tag-BjCJfJ7N.js";import"./useHighlightSelectionDescription-Bo0ndmWd.js";import"./useUpdateEffect-C_ai5HRE.js";import"./useHasTabbableChild-BppoGSMr.js";import"./chevron-down-CLCcBtQh.js";import"./Virtualizer-M_Jf2QpI.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
