import{j as e}from"./iframe-BwW6Fqvd.js";import{c}from"./Form-C0ycgpGF.js";import{G as d}from"./Grid-O7iySa5F.js";import{G as i}from"./GridItem-DdP5mFiL.js";import{a as x,R as u}from"./Radio-CGVVK_kp.js";import{C as I}from"./CheckboxGroup-DbiU-cYt.js";import{C as G}from"./Checkbox-DiRdmrc2.js";import{T as t}from"./TextField-CnsP58rQ.js";import{S as l}from"./Select-BIPBFvm4.js";import{L as p}from"./ListBoxItem-CTdkPvuN.js";import{B as a}from"./Button-D29dOr6P.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B8ItjY_Y.js";import"./utils-Bghr1fcB.js";import"./clsx-B-dksMZM.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./clsx-Ciqy0D92.js";import"./Group-BXB9YxFU.js";import"./FieldError-DG2mBVdw.js";import"./Text-CYDu8Dn_.js";import"./Text-D0nO-HBI.js";import"./Button-zWxdU5Zd.js";import"./Hidden-DOVwj0BP.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./SelectionIndicator-Cf42c1mS.js";import"./useField-Cv7gnOSH.js";import"./VisuallyHidden-6rJm-kLH.js";import"./useControlledState-DGQCfKNy.js";import"./Label-sxDBxkWi.js";import"./Dialog-BRz4jbex.js";import"./RSPContexts-Bh9oL_fS.js";import"./OverlayArrow-DWhc0KKE.js";import"./useResizeObserver-CgzeOzAv.js";import"./Collection-DDKAL2kq.js";import"./index-C1W8SJ9q.js";import"./Separator-cNZLL5LH.js";import"./SelectionManager-D0j-6TvJ.js";import"./useEvent-DMcK-jhf.js";import"./scrollIntoView-CvIpTomZ.js";import"./useDescription-DDaxYDi5.js";import"./ListKeyboardDelegate-Mx-nXjyt.js";import"./PressResponder-8_a2ySpr.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQkHoCqk.js";import"./getScrollParent-C7W5J6K6.js";import"./x-BceaA5bl.js";import"./createLucideIcon-baXbygoM.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Heading-B3fvxMc9.js";import"./info-BwI5uWQ1.js";import"./Popover-CkfRqJc8.js";import"./check-BPKRsxYA.js";import"./useToggleState-QdsEKVSL.js";import"./TextFieldBase-CWcZg5A6.js";import"./Input-p9o3LqS3.js";import"./useTextField-CrtQoaTV.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-tPBeZJlT.js";import"./DragAndDrop-BumqeXUd.js";import"./inertValue-DGAH8tJD.js";import"./useListState-DBjpXOyj.js";import"./TagGroup-DZiGnhif.js";import"./useHighlightSelectionDescription-B-pzx9aY.js";import"./useUpdateEffect-BOBlZ46l.js";import"./useHasTabbableChild-DUPv12Ip.js";import"./chevron-down-DSMEED2V.js";import"./Virtualizer-fDp9ZZuH.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
