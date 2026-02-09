import{j as e}from"./iframe-D6IpBoiw.js";import{$ as c}from"./Form-Csw1KBWi.js";import{G as d}from"./Grid-BUHsgjTu.js";import{G as i}from"./GridItem-C_F173NV.js";import{a as x,R as u}from"./Radio-C-Dlama3.js";import{C as I}from"./CheckboxGroup-Btd5FT99.js";import{C as G}from"./Checkbox-CyMmrs5M.js";import{T as t}from"./TextField-DFAVrPZy.js";import{S as l}from"./Select-m9hTjQ6q.js";import{L as p}from"./ListBoxItem-Bs4zUQhb.js";import{B as a}from"./Button-Cb8vfEHL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DrRnVz6M.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C0YcTuLl.js";import"./useFocusRing-DDjRvQVt.js";import"./index-Dke63n0T.js";import"./index-Cdvq_tAn.js";import"./clsx-Ciqy0D92.js";import"./Group-Ch74GD3q.js";import"./FieldError-D84PxaCJ.js";import"./Text-DAWTtlkt.js";import"./Text-qQ3S5Jc_.js";import"./Button-ho_h7HBc.js";import"./Hidden-CzdFjV_G.js";import"./useLabels-Ca7mubzD.js";import"./useButton-BZVVg511.js";import"./SelectionIndicator-Bm7ArBIF.js";import"./useField-C36_1XdQ.js";import"./VisuallyHidden-CvlpTHpP.js";import"./useControlledState-CLuCJDnt.js";import"./Label-CYZ04qFY.js";import"./Dialog-BP6O-jWc.js";import"./RSPContexts-DEazweFL.js";import"./OverlayArrow-yIqFLxSG.js";import"./useResizeObserver-BoHXCLyr.js";import"./Collection-BXe7XviT.js";import"./index-D-8A3CKx.js";import"./Separator-Dy-5_Txz.js";import"./SelectionManager-BdDUSQWT.js";import"./useEvent-D0T-5SZD.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cef-uVL5.js";import"./ListKeyboardDelegate-BafDUYsL.js";import"./PressResponder-BCqBFdus.js";import"./useLocalizedStringFormatter-S2cYCAmY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D50INRZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BQZH2C42.js";import"./createLucideIcon-C8Gze4Yd.js";import"./useLocalizedStringFormatter-D7KJljx3.js";import"./Heading-GsAsFs17.js";import"./info-CMki08a3.js";import"./Popover-CFhA0iae.js";import"./check-ByJ3Yi9G.js";import"./useToggleState-BTFzzIWQ.js";import"./TextFieldBase-6gs3fXzq.js";import"./TextField-CPhw70O6.js";import"./Input-Bmr6hF_U.js";import"./useTextField-CxlXJA65.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DPUOwbY1.js";import"./DragAndDrop-BjUpSSrh.js";import"./inertValue-PVSuPQVV.js";import"./useListState-3g4N_dXd.js";import"./Tag-CRuy-BCo.js";import"./useHighlightSelectionDescription-DanaoyJT.js";import"./useUpdateEffect-BuaxQynw.js";import"./useHasTabbableChild-BwV7CQom.js";import"./chevron-down-DEL81m9P.js";import"./Virtualizer-CqtxKzYD.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
