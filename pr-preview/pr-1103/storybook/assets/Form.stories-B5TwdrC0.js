import{j as e}from"./iframe-DQVQza6Y.js";import{$ as c}from"./Form-Cjn7PnmZ.js";import{G as d}from"./Grid-B01lV3a2.js";import{G as i}from"./GridItem-BmwMOb8C.js";import{a as x,R as u}from"./Radio-DMKE9JRa.js";import{C as I}from"./CheckboxGroup--1O8h232.js";import{C as G}from"./Checkbox-C34-LF3A.js";import{T as t}from"./TextField-CKiXsZag.js";import{S as l}from"./Select-GhHaxvXs.js";import{L as p}from"./ListBoxItem-D4lI5Nyu.js";import{B as a}from"./Button-BVp6tPBn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D-_RfQn2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BZrjYykE.js";import"./useFocusRing-CBM0kVUN.js";import"./index-DiS2M8Ea.js";import"./index-CfbU1Mg4.js";import"./clsx-Ciqy0D92.js";import"./Group-C5exPqAm.js";import"./FieldError-BFJVbEZW.js";import"./Text-BbABlkeP.js";import"./Text-CiNfpZ1d.js";import"./Button-BSDgymoN.js";import"./Hidden-Hezyv9Df.js";import"./useLabels-De2gA6Om.js";import"./useButton-B4zLsihB.js";import"./SelectionIndicator-BXXptdDE.js";import"./useField-2JEukHs2.js";import"./VisuallyHidden-DtlR1Tt8.js";import"./useControlledState-CaVALF-g.js";import"./Label-CzvcKi8H.js";import"./Dialog-Br89W_zT.js";import"./RSPContexts-ydiiyV1F.js";import"./OverlayArrow-BqCgJrxs.js";import"./useResizeObserver-DGAz0OcW.js";import"./Collection-C6Qbbb2e.js";import"./index-DkrK4_g-.js";import"./Separator-D4ald2F_.js";import"./SelectionManager-D_CKVvJd.js";import"./useEvent-Cy-UQw5n.js";import"./scrollIntoView-BNfA40iN.js";import"./useDescription-DvP5wxQA.js";import"./ListKeyboardDelegate-BFk2aK8l.js";import"./PressResponder-Dgy_OUzW.js";import"./useLocalizedStringFormatter-Dx8dDRGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BuBj8cTs.js";import"./getScrollParent-CB6YDYVQ.js";import"./x-CJRhTqpy.js";import"./createLucideIcon-CuIMjDf_.js";import"./useLocalizedStringFormatter-IWYOBSFO.js";import"./Heading-BVNrAe5L.js";import"./info-DatlPzqs.js";import"./Popover-CHduL7em.js";import"./check-D_F7i4dn.js";import"./useToggleState-CuVwLYye.js";import"./TextFieldBase-Czh7M8Mv.js";import"./Input-LXC-v-PP.js";import"./useTextField-Ce1nkcbT.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-evrcWlId.js";import"./DragAndDrop-BIW4K5dA.js";import"./inertValue-jkeJpqwy.js";import"./useListState-K5xCT-Hj.js";import"./TagGroup-D7gMN1HG.js";import"./useHighlightSelectionDescription-D5BnEIfP.js";import"./useUpdateEffect-DR7_RC1V.js";import"./useHasTabbableChild-C9nHdI8P.js";import"./chevron-down-CM256TFk.js";import"./Virtualizer-BKXk564_.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
