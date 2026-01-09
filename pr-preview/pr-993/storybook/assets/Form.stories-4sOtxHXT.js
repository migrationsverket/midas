import{j as e}from"./iframe-DSZ2fKvK.js";import{$ as c}from"./Form-DiZ-C_ny.js";import{G as d}from"./Grid-D6-qS69l.js";import{G as i}from"./GridItem-ChcCSzvD.js";import{T as t}from"./TextField-CnsmRsvK.js";import{S as l}from"./Select-v2i0uciI.js";import{B as a}from"./Button-wYRzLtLo.js";import{R as x,a as u}from"./Radio-CMuTWypH.js";import{C as I}from"./CheckboxGroup-BVV3jwcO.js";import{C as G}from"./Checkbox-BygpU1wd.js";import{L as p}from"./ListBoxItem-DPrh8wkE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cfkrut6D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CqeQwe6N.js";import"./useFocusRing-DXadVZPZ.js";import"./index-DoXffT-S.js";import"./index-DWmwxavY.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BH8GYgwT.js";import"./TextField-y2-QQLDL.js";import"./FieldError-BMni7XFl.js";import"./Text-CgCYlfoO.js";import"./Text-w9kcErxq.js";import"./RSPContexts-Dor0eJbl.js";import"./Group-4mchAbS6.js";import"./Input-Bs_AfZCm.js";import"./Hidden-ChZPyTdJ.js";import"./Button-DA0aKT5l.js";import"./useLabels-CBr_pV_K.js";import"./useButton-BoGmqoO9.js";import"./useTextField-JkOTThfh.js";import"./useControlledState-KoCGTRr1.js";import"./useField-CClsPm5e.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpLOnecY.js";import"./Dialog-76dV7wm5.js";import"./OverlayArrow-D0jjKAlM.js";import"./useResizeObserver-Bf_O2Yeh.js";import"./Collection-ChAdkSBy.js";import"./index--CzgAou0.js";import"./Separator-C5DpsQ8u.js";import"./SelectionManager-05692ccu.js";import"./useEvent-DbBN9uYZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cl5pLQxb.js";import"./useDescription-CWxL4hNe.js";import"./ListKeyboardDelegate-E7ClQiAa.js";import"./PressResponder-DeC2vrS8.js";import"./useLocalizedStringFormatter-BJCLTOit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRlXv4xO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-9r-CcUTk.js";import"./x-DPL0DItu.js";import"./createLucideIcon-BZEE360n.js";import"./useLocalizedStringFormatter-fLqKeFmr.js";import"./Heading-CTO5IYsM.js";import"./info-C3zZX9Gl.js";import"./Popover-BAa_y_Lz.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-1wFD7kNC.js";import"./DragAndDrop-7EOQz2XR.js";import"./inertValue-BMJe3Dqu.js";import"./useListState-rQKfvmEW.js";import"./Tag-BYjxFIYK.js";import"./useHighlightSelectionDescription-nnB3n4VC.js";import"./useUpdateEffect-BhGK5FZY.js";import"./useHasTabbableChild-w2Em7Ff1.js";import"./chevron-down-DL6nwOVL.js";import"./Button.module-Co5e5YHp.js";import"./check-BsDK_EBf.js";import"./useToggleState-DjFVoi9D.js";import"./Virtualizer-C6wzAKG0.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
