import{j as e}from"./iframe-DLmeXnKv.js";import{c}from"./Form-D9z8hvZj.js";import{G as d}from"./Grid-B2JdVT4m.js";import{G as i}from"./GridItem-zuHYRuy6.js";import{a as x,R as u}from"./Radio-CuXm2nSe.js";import{C as I}from"./CheckboxGroup-CwdHKMg5.js";import{C as G}from"./Checkbox-auFTacn6.js";import{T as t}from"./TextField-DW4Luftp.js";import{S as l}from"./Select-DJL3H9Tu.js";import{L as p}from"./ListBoxItem-F59yJoin.js";import{B as a}from"./Button-CmoC0nDS.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Chec2SQM.js";import"./utils-ClLZ4yi-.js";import"./clsx-B-dksMZM.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./clsx-Ciqy0D92.js";import"./Group-CuXfT3dh.js";import"./FieldError-BpDzH8Cd.js";import"./Text-as2Y-4wz.js";import"./Text-ByAHNZXR.js";import"./Button-6oEuMc47.js";import"./Hidden-DYR-bjkD.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./SelectionIndicator-Cy4dV5Da.js";import"./useField-C-J_0N0F.js";import"./VisuallyHidden-BCbNtM-G.js";import"./useControlledState-B3HwZ_qH.js";import"./Label-xngpEuzc.js";import"./Dialog-CKD2jTTJ.js";import"./RSPContexts-DA-h5R_C.js";import"./OverlayArrow-DHWOJV9Q.js";import"./useResizeObserver-DDCJCKFG.js";import"./Collection-BN6mLPtZ.js";import"./index-D4QiN2go.js";import"./Separator-CJAQYS8Y.js";import"./SelectionManager-DWkTWies.js";import"./useEvent-D3OHHv5s.js";import"./scrollIntoView-DOnnrSvN.js";import"./useDescription-B42TuL4b.js";import"./ListKeyboardDelegate-Cr-a3LsS.js";import"./PressResponder-yUfG0WEN.js";import"./useLocalizedStringFormatter-CjQq4jGT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGjDSiHx.js";import"./getScrollParent-B00tpoYc.js";import"./ModalOverlay-DmqLMWJI.js";import"./x-WR_Pezhl.js";import"./createLucideIcon-Cb9jSIDP.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./Heading-UueCPB47.js";import"./info-KJtQdgZ8.js";import"./Popover-dlczDKp1.js";import"./check-DObRk8di.js";import"./useToggleState-_uJP0eQT.js";import"./TextFieldBase-BQvKvJxB.js";import"./Input-CcIXyW6y.js";import"./useTextField-BEsTiIX_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C9elSI1L.js";import"./DragAndDrop-C1psWB3e.js";import"./inertValue-CcYRD9f0.js";import"./useListState-CXtrWM2e.js";import"./TagGroup-Cy-y_Ter.js";import"./useHighlightSelectionDescription-Ct1aF90k.js";import"./useUpdateEffect-sqLJIs5-.js";import"./useHasTabbableChild-BNJkWc11.js";import"./chevron-down-w5khoAUm.js";import"./Virtualizer-ByX4qqq6.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
