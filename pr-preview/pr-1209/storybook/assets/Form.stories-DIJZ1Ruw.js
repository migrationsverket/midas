import{j as e}from"./iframe-DeJZYfs6.js";import{c}from"./Form-C-IA29jh.js";import{G as d}from"./Grid-BCw_SLSz.js";import{G as i}from"./GridItem-T7hTuTLv.js";import{a as x,R as u}from"./Radio-BGobyLm4.js";import{C as I}from"./CheckboxGroup-DAhH0wWu.js";import{C as G}from"./Checkbox-BegcHKeZ.js";import{T as t}from"./TextField-gOwWVg1y.js";import{S as l}from"./Select-vaXNe-2d.js";import{L as p}from"./ListBoxItem-Bejya7ZB.js";import{B as a}from"./Button-7AU2H28z.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-EUZ5WM39.js";import"./utils-CVaTJ4pr.js";import"./clsx-B-dksMZM.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./clsx-Ciqy0D92.js";import"./Group-B-AmjHbU.js";import"./FieldError-Bu4wLSzH.js";import"./Text-DiI9AjCa.js";import"./Text-BDvIHgKo.js";import"./Button-TyrtoBf7.js";import"./Hidden-CpOEnTcU.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./SelectionIndicator-CfLsX9sj.js";import"./useField-DP3RVU73.js";import"./VisuallyHidden-C7trIB5i.js";import"./useControlledState-e4htfzmn.js";import"./Label-DGHbBSoZ.js";import"./Dialog-BKKPlMRz.js";import"./RSPContexts-BW4hyt92.js";import"./OverlayArrow-BX-XAuow.js";import"./useResizeObserver-BcdcrqhO.js";import"./Collection-BPBdLDAU.js";import"./index-X7ll_aVF.js";import"./Separator-DP8XjcFV.js";import"./SelectionManager-C1t4FTfK.js";import"./useEvent-Prn2T694.js";import"./scrollIntoView-CmHT6ElZ.js";import"./useDescription-DM4YbjnM.js";import"./ListKeyboardDelegate-C4mFB7JL.js";import"./PressResponder-81Dm5uHE.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Drxg6nEc.js";import"./getScrollParent-cyrVl-ro.js";import"./Dialog-DImgXYM0.js";import"./x-QMdCwQzi.js";import"./createLucideIcon-BN41fbAL.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Heading-OxyOCkj5.js";import"./info-Bctd-Gpa.js";import"./Popover-BFExrSuc.js";import"./check-DLQm5x4V.js";import"./useToggleState-BrFsELFk.js";import"./TextFieldBase-C7SAQ-dF.js";import"./Input-7EHMCOwY.js";import"./useTextField-CNvSGf-Y.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BHFp2GBV.js";import"./DragAndDrop-qTevrmCN.js";import"./inertValue-ThjtQrx5.js";import"./useListState-D57qqggp.js";import"./TagGroup-C3ffrjJV.js";import"./useHighlightSelectionDescription-CbaRau5z.js";import"./useUpdateEffect-BKlEp44w.js";import"./useHasTabbableChild-DoRI6q5Z.js";import"./chevron-down-B2DDG8Xq.js";import"./Virtualizer-Br2izv9Z.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
