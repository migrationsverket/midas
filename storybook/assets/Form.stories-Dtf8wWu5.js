import{j as e}from"./iframe-oKPevWaY.js";import{c}from"./Form-D8hKIz8A.js";import{G as d}from"./Grid-BO-OHGHp.js";import{G as i}from"./GridItem-7t_tkuYY.js";import{a as x,R as u}from"./Radio-Ds0YvGhF.js";import{C as I}from"./CheckboxGroup-4Q0pi0C1.js";import{C as G}from"./Checkbox-D4TYbEoW.js";import{T as t}from"./TextField-BTbFTfah.js";import{S as l}from"./Select-CF5hahS3.js";import{L as p}from"./ListBoxItem-g8K7225x.js";import{B as a}from"./Button-BPGT5-63.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BNAmj3ga.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./clsx-Ciqy0D92.js";import"./Group-D4AR734E.js";import"./FieldError-B9nT_kkA.js";import"./Text-NuhHAO3F.js";import"./Text-CEmixCfV.js";import"./Button-UMnKvlHB.js";import"./Hidden-DpO7vPy1.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./SelectionIndicator-lk-xC_bn.js";import"./useField-Bl_GZwWa.js";import"./VisuallyHidden-D5YwBUcA.js";import"./useControlledState-CyVhgPro.js";import"./Label-Brw2JrKu.js";import"./Dialog-BzgqjoUu.js";import"./RSPContexts-I8GuPoNW.js";import"./OverlayArrow-DvjZHb9S.js";import"./useResizeObserver-MEdL5GdH.js";import"./Collection-CkdTzR9R.js";import"./index-CzQfmgnt.js";import"./Separator-C-f_gDjQ.js";import"./SelectionManager-CDyUNFjs.js";import"./useEvent-IXAyeg2x.js";import"./scrollIntoView-B_u9uatn.js";import"./useDescription-Ya8G2xdV.js";import"./ListKeyboardDelegate-i-dcu7Zi.js";import"./PressResponder-Cml_sTZq.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rH8nux2W.js";import"./getScrollParent-B4qiDCOv.js";import"./x-DIFCquM7.js";import"./createLucideIcon-D_CPhcXk.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Heading-CAvfyWoD.js";import"./info-DiXhKcAi.js";import"./Popover-DUzKO22e.js";import"./check-BZoVZ7-0.js";import"./useToggleState-DcrfUPyt.js";import"./TextFieldBase-CdqY5GMo.js";import"./Input-CjDHzIIp.js";import"./useTextField-B-1OQ-Tr.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjVcTLhx.js";import"./DragAndDrop-BcWxLU6R.js";import"./inertValue-Bz4jWhKx.js";import"./useListState-PwqGO1Wh.js";import"./TagGroup-A12aEzg5.js";import"./useHighlightSelectionDescription-CeUQ4UO5.js";import"./useUpdateEffect-D2uSapZk.js";import"./useHasTabbableChild-BiW3X7yY.js";import"./chevron-down-8QRlwYdd.js";import"./Virtualizer-DAkihxKL.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
