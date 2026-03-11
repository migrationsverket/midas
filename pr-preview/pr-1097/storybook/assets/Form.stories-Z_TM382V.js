import{j as e}from"./iframe-BxhzVfg2.js";import{$ as c}from"./Form-CSuUxMvQ.js";import{G as d}from"./Grid-DQlDdpCU.js";import{G as i}from"./GridItem-Cdk_y_gn.js";import{a as x,R as u}from"./Radio-CvumSnbZ.js";import{C as I}from"./CheckboxGroup-DPeGnXcN.js";import{C as G}from"./Checkbox-CMEoWMWf.js";import{T as t}from"./TextField-Xj9x0yBg.js";import{S as l}from"./Select-DB9Poki3.js";import{L as p}from"./ListBoxItem-BDy555Tz.js";import{B as a}from"./Button-DVCkWjV4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZ6ahdJp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CovvDpdr.js";import"./useFocusRing-bIPgWBhX.js";import"./index-BdD9_fMh.js";import"./index-BQnXjsO_.js";import"./clsx-Ciqy0D92.js";import"./Group-CUI1rett.js";import"./FieldError-0WAd1Y6E.js";import"./Text-DJy4h6GN.js";import"./Text-0UCV12dD.js";import"./Button-BWZAZeiF.js";import"./Hidden-DbfZ_4s1.js";import"./useLabels-D-t3MvLa.js";import"./useButton-BdPz5CFW.js";import"./SelectionIndicator-eisYCPgp.js";import"./useField-D0R3_hHU.js";import"./VisuallyHidden-CI9pT65P.js";import"./useControlledState-CD2bBDu6.js";import"./Label-TwuIGGje.js";import"./Dialog-Cu1wCO9M.js";import"./RSPContexts-6uyhJgkS.js";import"./OverlayArrow-B7oQ_cUB.js";import"./useResizeObserver-DgHu5p4N.js";import"./Collection-CEh8H5R4.js";import"./index-Bka3Lxbj.js";import"./Separator-C4F_4thm.js";import"./SelectionManager-Bw1pNtXG.js";import"./useEvent-Db77X8Ds.js";import"./scrollIntoView-BP0QIdto.js";import"./useDescription-BuazjX7t.js";import"./ListKeyboardDelegate-B7qWljEu.js";import"./PressResponder-CF9BR_nn.js";import"./useLocalizedStringFormatter-DBjxKF2m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaiYKkGE.js";import"./getScrollParent-RVUz05Tj.js";import"./x-DcnHgmtQ.js";import"./createLucideIcon-B9VWei3c.js";import"./useLocalizedStringFormatter-C--O9Jox.js";import"./Heading-DicC2kkf.js";import"./info-DEPlyVkX.js";import"./Popover-DarRTTTw.js";import"./check-BhSWQBFZ.js";import"./useToggleState-9JidhOI6.js";import"./TextFieldBase-BCGpHAdD.js";import"./Input-Ddzpd0fg.js";import"./useTextField-DzoR-Tga.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox--pZ3Ob7S.js";import"./DragAndDrop-C4RJwtUY.js";import"./inertValue-Ctf1J83V.js";import"./useListState-D_Nsj3y2.js";import"./TagGroup-h4An2K63.js";import"./useHighlightSelectionDescription-Cxkgbe8i.js";import"./useUpdateEffect-DsFAwvYG.js";import"./useHasTabbableChild-C-cgVBma.js";import"./chevron-down-DZZef8w8.js";import"./Virtualizer-Cf8MnHPm.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
