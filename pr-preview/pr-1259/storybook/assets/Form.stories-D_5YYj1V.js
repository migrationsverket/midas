import{j as e}from"./iframe-BtoRqfbN.js";import{c}from"./Form-TovplDMB.js";import{G as d}from"./Grid-C_ynnLV7.js";import{G as i}from"./GridItem-gI-GfDZi.js";import{a as x,R as u}from"./Radio-4OvuZVCI.js";import{C as I}from"./CheckboxGroup-lkVZ_-ae.js";import{C as G}from"./Checkbox-CV8bYp64.js";import{T as t}from"./TextField-B1xGogUn.js";import{S as l}from"./Select-DdIi-Omw.js";import{L as p}from"./ListBoxItem-Co2SC42u.js";import{B as a}from"./Button-Dz0YcLF0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CPJmXdz2.js";import"./utils-D3T2l2Oh.js";import"./clsx-B-dksMZM.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./clsx-Ciqy0D92.js";import"./Group-DGWr_ank.js";import"./FieldError-B4waYEQL.js";import"./Text-x1siHFmD.js";import"./Text-UZHsyA5K.js";import"./Button-D0NLyYor.js";import"./Hidden-DmNqBwSB.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./SelectionIndicator-DN-f_s8Q.js";import"./useField-BmyqTXhe.js";import"./VisuallyHidden-DH8wexDg.js";import"./useControlledState-acke6wY8.js";import"./Label-DK3Co7m-.js";import"./Dialog-lusSOXwC.js";import"./RSPContexts-DkTToRLK.js";import"./OverlayArrow-Dxt346hx.js";import"./useResizeObserver-musF9ULC.js";import"./Collection-BxhFXTj7.js";import"./index-VivUuEmv.js";import"./Separator-C3z6jLVu.js";import"./SelectionManager-BhME_TyD.js";import"./useEvent-DfABwBS6.js";import"./scrollIntoView-DKC0Wlwj.js";import"./useDescription-Dme_kk-C.js";import"./ListKeyboardDelegate-CiLABnWW.js";import"./PressResponder-DYHSOAMr.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuqN4n3N.js";import"./getScrollParent-D4tvg9G7.js";import"./ModalOverlay-cbu2Qy_Z.js";import"./x-DBRu_Ryo.js";import"./createLucideIcon-BGwZIy7f.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./Heading-CYWasPPU.js";import"./info-Bb57Bs3j.js";import"./Popover-382lm4tK.js";import"./check-BH81vSb7.js";import"./useToggleState-Chju03YS.js";import"./TextFieldBase-BM3tcHCh.js";import"./Input-D3aAlazw.js";import"./useTextField-Opkbo0Gs.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0U-3gbIz.js";import"./DragAndDrop-BXmbPX2l.js";import"./inertValue-CR-_CkZ4.js";import"./useListState-D9AJEa7w.js";import"./TagGroup-C38QXrLA.js";import"./useHighlightSelectionDescription-BcBCPNdm.js";import"./useUpdateEffect-DMqv8wU_.js";import"./useHasTabbableChild-HmJM8sRe.js";import"./chevron-down-DVOKmBDo.js";import"./Virtualizer-B5kbtE4i.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
