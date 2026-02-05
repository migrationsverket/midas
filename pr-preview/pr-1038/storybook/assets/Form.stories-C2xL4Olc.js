import{j as e}from"./iframe-CgfDwMsT.js";import{$ as c}from"./Form-BWcEeBnI.js";import{G as d}from"./Grid-BYAwNEcN.js";import{G as i}from"./GridItem-DMupB7ao.js";import{a as x,R as u}from"./Radio-DUvQ3rB3.js";import{C as I}from"./CheckboxGroup-SKFyqlx4.js";import{C as G}from"./Checkbox-BSRBHSoY.js";import{T as t}from"./TextField-Bg7uysG8.js";import{S as l}from"./Select-Cv2D79qb.js";import{L as p}from"./ListBoxItem-yvAPkQu3.js";import{B as a}from"./Button-C6uLPlVc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLuUze_r.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-COEBX163.js";import"./useFocusRing-aa-V_nwI.js";import"./index-BNYk_4JU.js";import"./index-Dv-85DYp.js";import"./clsx-Ciqy0D92.js";import"./Group-B8apYWEe.js";import"./FieldError-B7h73jse.js";import"./Text-E6YbvuHS.js";import"./Text-CaslyU5o.js";import"./Button-C7WplXtK.js";import"./Hidden-CJELcxwQ.js";import"./useLabels-DNGz1z-B.js";import"./useButton-BH5dt01l.js";import"./SelectionIndicator-t9jVfqOa.js";import"./useField-CvXFpz9I.js";import"./VisuallyHidden-DyZ9BPVk.js";import"./useControlledState-iA0OTCu9.js";import"./Label-BzumT7fp.js";import"./Dialog-CwSajge6.js";import"./RSPContexts-DvQiZ2rE.js";import"./OverlayArrow-CAjKRREM.js";import"./useResizeObserver-UqoURxQ-.js";import"./Collection-C4M8l1yV.js";import"./index-UGE9mCaU.js";import"./Separator-g-pZPYls.js";import"./SelectionManager-Cl8CuRve.js";import"./useEvent-e-NwapiS.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CrupViey.js";import"./ListKeyboardDelegate-BJ31K7BN.js";import"./PressResponder-C_J1gD1a.js";import"./useLocalizedStringFormatter-Bgfo292P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0eTp-du.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bz2PUtNw.js";import"./createLucideIcon-CwSVauo5.js";import"./useLocalizedStringFormatter-BzThpmxU.js";import"./Heading-DvDu4lhU.js";import"./info-CBhSIH8T.js";import"./Popover-5ceXyevA.js";import"./check-DR1tMG6C.js";import"./useToggleState-CgcYul7U.js";import"./TextFieldBase-D6jAfFxt.js";import"./TextField-CxyU1gNC.js";import"./Input-DaHeptqe.js";import"./useTextField-BaAURpti.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CVFkVJFZ.js";import"./DragAndDrop-CMsJpNTA.js";import"./inertValue--YI7_nZf.js";import"./useListState-D9ZwJYTt.js";import"./Tag-BxDWOUTb.js";import"./useHighlightSelectionDescription-BZgWTEFY.js";import"./useUpdateEffect-Bvtecmme.js";import"./useHasTabbableChild-RpaEvwwz.js";import"./chevron-down-Bncv0IwU.js";import"./Virtualizer-LOqJDF2a.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
