import{j as e}from"./iframe-u611P0T1.js";import{c}from"./Form-Ct-T4_sP.js";import{G as d}from"./Grid-NmBI_zo5.js";import{G as i}from"./GridItem-PGzmJjJu.js";import{a as x,R as u}from"./Radio-C5-bkH8w.js";import{C as I}from"./CheckboxGroup-B4nlivbV.js";import{C as G}from"./Checkbox-BGSAv2zu.js";import{T as t}from"./TextField-frYrKVsx.js";import{S as l}from"./Select-BEoR-347.js";import{L as p}from"./ListBoxItem-DUHyjYpH.js";import{B as a}from"./Button-D0hAEojt.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-x1014Y4C.js";import"./utils-BdhmhbmB.js";import"./clsx-B-dksMZM.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./clsx-Ciqy0D92.js";import"./Group-CJpHDVfm.js";import"./FieldError-BUsLHsVx.js";import"./Text-C1ITd__M.js";import"./Text-BiFS0ps1.js";import"./Button-DHuMXkEV.js";import"./Hidden-BwAa9Aqn.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./SelectionIndicator-yCd4h3zR.js";import"./useField-DM_n0gFB.js";import"./VisuallyHidden-CPF-h8vx.js";import"./useControlledState-C8WxcwQm.js";import"./Label-C-LHc2be.js";import"./Dialog-DWlne9J1.js";import"./RSPContexts-CHqXj6wS.js";import"./OverlayArrow-DAE7O7dg.js";import"./useResizeObserver-CbeqsHNK.js";import"./Collection-6utQT-aI.js";import"./index-CY3bk5JT.js";import"./Separator-BuPoNgXF.js";import"./SelectionManager-B545sqsy.js";import"./useEvent-NAjU2EOD.js";import"./scrollIntoView-XJLuBOkU.js";import"./useDescription-Dz-E1gaV.js";import"./ListKeyboardDelegate-BSlu98Kz.js";import"./PressResponder-CUS5_lY9.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tAspbt5B.js";import"./getScrollParent-Dr2tWDHe.js";import"./ModalOverlay-C1viWdRz.js";import"./x-BKnl8vZI.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Heading-CqJG1U4J.js";import"./info-CNWJ9NT2.js";import"./Popover-C1J1shoo.js";import"./check-CHtO750Y.js";import"./useToggleState-CZLXoowP.js";import"./TextFieldBase-Y8BJ2T_R.js";import"./Input-DNUxzppg.js";import"./useTextField-DuE_Lsr4.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BRH9R-HA.js";import"./DragAndDrop-BcIs4weL.js";import"./inertValue-C_vx55qk.js";import"./useListState-CsioEWsV.js";import"./TagGroup-C5PIX8v0.js";import"./useHighlightSelectionDescription-CvGxYJ3U.js";import"./useUpdateEffect-CAYFW-uc.js";import"./useHasTabbableChild-Bnt7GmfW.js";import"./chevron-down-CmxRbmB6.js";import"./Virtualizer-YE7Wv7yl.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
