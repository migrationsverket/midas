import{j as e}from"./iframe-CwW8sN4S.js";import{c}from"./Form-CUc0WOwk.js";import{G as d}from"./Grid-Dk3iM5pk.js";import{G as i}from"./GridItem-CrQ0OScV.js";import{a as x,R as u}from"./Radio-C7bSRgr6.js";import{C as I}from"./CheckboxGroup-DEoKTkLh.js";import{C as G}from"./Checkbox-DpRJymp8.js";import{T as t}from"./TextField-DOCPHsXD.js";import{S as l}from"./Select-56a5w7zg.js";import{L as p}from"./ListBoxItem-T-TIoGcs.js";import{B as a}from"./Button-BNJwH1Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-cgdKMhcs.js";import"./utils-B_M889tP.js";import"./clsx-B-dksMZM.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./clsx-Ciqy0D92.js";import"./Group-YWsXtnDF.js";import"./FieldError-BlJWYskW.js";import"./Text-BE9Sihnv.js";import"./Text-C5uja355.js";import"./Button-C3AuE87p.js";import"./Hidden-CVoubVAI.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./SelectionIndicator-B23FeEQ3.js";import"./useField-C2elZhF8.js";import"./VisuallyHidden-BudlR0yM.js";import"./useControlledState-CC34MHAe.js";import"./Label-BtXdhNCg.js";import"./Dialog-taGEIRz0.js";import"./RSPContexts-szw5AFHr.js";import"./OverlayArrow-Dhpegq9P.js";import"./useResizeObserver-DIXIeOSr.js";import"./Collection-AVCAnE9e.js";import"./index-ZmllTkBI.js";import"./Separator-D1lrfBKJ.js";import"./SelectionManager-DjP27Hq6.js";import"./useEvent-CeuSem5l.js";import"./scrollIntoView-DJ_jtxbK.js";import"./useDescription-UAInHKf4.js";import"./ListKeyboardDelegate-CQEvvxFH.js";import"./PressResponder-DDLeQnn7.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsnOxs_W.js";import"./getScrollParent-DKE2Book.js";import"./ModalOverlay-K-4HGfJs.js";import"./x-DNLXf0Tv.js";import"./createLucideIcon-DzXM4i8f.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Heading-Bb8pQtsc.js";import"./info-wfKsbo8I.js";import"./Popover-DbYbPZ55.js";import"./check-BwJGBTLI.js";import"./useToggleState-CDbmgQBe.js";import"./TextFieldBase-GW39TkAM.js";import"./Input-D9NlLKsA.js";import"./useTextField-Boz7dTUi.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DU2Ez71K.js";import"./DragAndDrop-Ajqa6gNA.js";import"./inertValue-BkTyWPzz.js";import"./useListState-DKoIZuUF.js";import"./TagGroup-ROjK4-zN.js";import"./useHighlightSelectionDescription-D2QXW7oI.js";import"./useUpdateEffect-BLNpbhTQ.js";import"./useHasTabbableChild-DBg-9pAE.js";import"./chevron-down-JpovwIEj.js";import"./Virtualizer-VNQKhR05.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
