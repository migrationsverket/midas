import{j as e}from"./iframe-DP3vvJW_.js";import{c}from"./Form-By5_t82Q.js";import{G as d}from"./Grid-CHwui6x5.js";import{G as i}from"./GridItem-KfB1BFyx.js";import{a as x,R as u}from"./Radio-Vgl2iGIq.js";import{C as I}from"./CheckboxGroup-D-H3-EPk.js";import{C as G}from"./Checkbox-CxRIU1tL.js";import{T as t}from"./TextField-DzIJPQcH.js";import{S as l}from"./Select-Cj5I53ox.js";import{L as p}from"./ListBoxItem-X9PtA8yH.js";import{B as a}from"./Button-CqcFgrq0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CT4t16Bn.js";import"./utils-DeQRcX3I.js";import"./clsx-B-dksMZM.js";import"./index-nwZ9FQBx.js";import"./index-B0BlSEXc.js";import"./clsx-Ciqy0D92.js";import"./Group-cz4Xi5QE.js";import"./FieldError-Bmtmc6Ue.js";import"./Text-COCpEZrG.js";import"./Text-CdS1c328.js";import"./Button-Cm4-ITis.js";import"./Hidden-0kVxHtHC.js";import"./useLabel-BkKpedFS.js";import"./useLabels-DjnDZU9d.js";import"./useButton-BtKEagUR.js";import"./SelectionIndicator-BRvYQOhy.js";import"./useField-CCf3XAps.js";import"./VisuallyHidden-ohAQh_Nb.js";import"./useControlledState-B3z4I1hz.js";import"./Label-CeLH0k_s.js";import"./Dialog-BK4q9YKD.js";import"./RSPContexts-BPYDVhoO.js";import"./OverlayArrow-DOOK3l1H.js";import"./useResizeObserver-CSHbB_F6.js";import"./Collection-Dad9EmoV.js";import"./index-BC044ghQ.js";import"./Separator-C4YfgHAr.js";import"./SelectionManager-boEt2-9H.js";import"./useEvent-KPlZMkuH.js";import"./scrollIntoView-C9R--iDG.js";import"./useDescription-ChOnG5Gy.js";import"./ListKeyboardDelegate-B74dJT2P.js";import"./PressResponder-DVOus0r9.js";import"./useLocalizedStringFormatter-CDrhnNBu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqNaSxvm.js";import"./getScrollParent-DKQ_TpWj.js";import"./ModalOverlay-COt_YS9z.js";import"./x-DF0EZiF0.js";import"./createLucideIcon-Deup7nCX.js";import"./useLocalizedStringFormatter-FpMcBaq8.js";import"./Heading-Bj5Rj2cw.js";import"./info-DwIRHbbO.js";import"./Popover-DjWu-nMd.js";import"./check-DLyREv7d.js";import"./useToggleState-CrlmJhkn.js";import"./TextFieldBase-DN27ArDS.js";import"./Input-B9oFuB3W.js";import"./useTextField-D5Jyyd4s.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQo4J2xY.js";import"./DragAndDrop-D_hP7FFC.js";import"./inertValue-BhWO4pkY.js";import"./useListState-CWmS76oO.js";import"./TagGroup-CGMWvRfd.js";import"./useHighlightSelectionDescription-DLoylMH6.js";import"./useUpdateEffect-BicW3JmJ.js";import"./useHasTabbableChild-BAj4kIJ0.js";import"./chevron-down-Cl32yf1j.js";import"./Virtualizer-DW1khToV.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
