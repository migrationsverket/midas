import{j as e}from"./iframe-NjzEciz2.js";import{$ as c}from"./Form-BX_pqHln.js";import{G as d}from"./Grid-BNl50czx.js";import{G as i}from"./GridItem-Cl4ivpep.js";import{T as t}from"./TextField-Cqn1NvDg.js";import{S as l}from"./Select-B1zxzhaL.js";import{B as a}from"./Button-BGeEKZH3.js";import{R as x,a as u}from"./Radio-D6nTSWe2.js";import{C as I}from"./CheckboxGroup-DSqGzX2F.js";import{C as G}from"./Checkbox-BnfKowuU.js";import{L as p}from"./ListBoxItem-BZZ7TAmv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BO22LAuU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Lb1IQGde.js";import"./useFocusRing-pzFTAHVD.js";import"./index-JjVsGnxi.js";import"./index-BPnXoL28.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BRe8M4Td.js";import"./TextField-BS9JvKWL.js";import"./FieldError-C8GxvgK1.js";import"./Text-BMhjNDEU.js";import"./Text-DKwC3A1F.js";import"./RSPContexts-Ct4MhcNR.js";import"./Group-Bkl10009.js";import"./Input-CZE_TdIP.js";import"./Hidden-C0J6_IGJ.js";import"./Button-CtzhNdTl.js";import"./useLabels-zRKHb-LF.js";import"./useButton-Ca2UVS6J.js";import"./useTextField-DkVAfl93.js";import"./useControlledState-DnclevfP.js";import"./useField-CJ6x7qGV.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BEL1V2Zs.js";import"./Dialog-BjLqyjRK.js";import"./OverlayArrow-BmDQ44gs.js";import"./useResizeObserver-CAx_rZrz.js";import"./Collection-CqkIhza4.js";import"./index-CTdlL6Pn.js";import"./Separator-B8MsEARJ.js";import"./SelectionManager-BxPU3mw2.js";import"./useEvent-GifwgeES.js";import"./scrollIntoView-CcG1gBOc.js";import"./SelectionIndicator-CIl18lf7.js";import"./useDescription-CunDP7hR.js";import"./ListKeyboardDelegate-B8LmX6q-.js";import"./PressResponder-TYf01ZVu.js";import"./useLocalizedStringFormatter-axeaHqCF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DS_CqlsL.js";import"./VisuallyHidden-0o86jBm3.js";import"./x-DJaQw8Gn.js";import"./createLucideIcon-CQYq2UEE.js";import"./useLocalizedStringFormatter-D0TL2D3I.js";import"./Heading-CBj0diMM.js";import"./info-GyqFWXkf.js";import"./Popover-CWRwlPoj.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-TcEjPExc.js";import"./DragAndDrop-CahWQcgS.js";import"./inertValue-DYqpUKhD.js";import"./useListState-DgAVL54-.js";import"./Tag-SbB4gyw1.js";import"./useHighlightSelectionDescription-Pz4XYg6p.js";import"./useUpdateEffect-Dh8uQIMM.js";import"./useHasTabbableChild-Bt1KdAXA.js";import"./chevron-down-yewMiJ2A.js";import"./Button.module-Co5e5YHp.js";import"./check-1tn0yNrF.js";import"./useToggleState-DLIFoXR-.js";import"./Virtualizer-BFYHUkCC.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
