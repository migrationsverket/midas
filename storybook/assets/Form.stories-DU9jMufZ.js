import{j as e}from"./iframe-lVehiq6l.js";import{c}from"./Form-BVTVpFyF.js";import{G as d}from"./Grid-DPQMWTYi.js";import{G as i}from"./GridItem-Dn8jcvTB.js";import{a as x,R as u}from"./Radio-C08skgyT.js";import{C as I}from"./CheckboxGroup-DpehcC30.js";import{C as G}from"./Checkbox-BYI8_fI8.js";import{T as t}from"./TextField-ZWl7l1b_.js";import{S as l}from"./Select-Bn0BMH_g.js";import{L as p}from"./ListBoxItem-D381Gxmi.js";import{B as a}from"./Button-Dp2V6GGG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing--_5FTCU2.js";import"./utils-mNJ9Z0MW.js";import"./clsx-B-dksMZM.js";import"./index-BYr4OlSN.js";import"./index-IBTB5hiH.js";import"./clsx-Ciqy0D92.js";import"./Group-Bj39cUw-.js";import"./FieldError-BiJGHbcs.js";import"./Text-BTYS5fVW.js";import"./Text-CB3b7It2.js";import"./Button-CYmCkrOz.js";import"./Hidden-CQ6hLYuq.js";import"./useLabel-BJ5LbRsC.js";import"./useLabels-BVtbuBE4.js";import"./useButton-CaovbWyL.js";import"./SelectionIndicator-ClMAv9ja.js";import"./useField-C95X0ruH.js";import"./VisuallyHidden-C5EMcuEJ.js";import"./useControlledState-BySGjGY5.js";import"./Label-B7ylLwdY.js";import"./Dialog-BzFPhWeI.js";import"./RSPContexts-DMhdXzo5.js";import"./OverlayArrow-sqCSEqCM.js";import"./useResizeObserver-AyxQt1_m.js";import"./Collection-Ctmg3yud.js";import"./index-CKxanYeA.js";import"./Separator-woD2Fun4.js";import"./SelectionManager-XPna52cV.js";import"./useEvent-E09xkLUE.js";import"./scrollIntoView-_wY1R8QT.js";import"./useDescription-CymLEEwh.js";import"./ListKeyboardDelegate-BDeGGVAe.js";import"./PressResponder-B1MDza39.js";import"./useLocalizedStringFormatter-Bj44o9Xo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkHmclv3.js";import"./getScrollParent-DZNwOYHo.js";import"./ModalOverlay-BMUDbYqE.js";import"./x-CCWQlqjq.js";import"./createLucideIcon-D1OyaQLn.js";import"./useLocalizedStringFormatter-qtrOBw-Q.js";import"./Heading-DZYBL7Gl.js";import"./info-DZTrspJ7.js";import"./Popover-DmFWcQiA.js";import"./check-B8SbehGq.js";import"./useToggleState-C-7RgL1P.js";import"./TextFieldBase-CUAj7jxd.js";import"./Input-DIC53MXy.js";import"./useTextField-DubTlxXT.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B2bk5L-C.js";import"./DragAndDrop-DtvApnQB.js";import"./inertValue-PPBuMnjj.js";import"./useListState-CrcZhcCc.js";import"./TagGroup-CPVr8N_Y.js";import"./useHighlightSelectionDescription-CaP-1DT6.js";import"./useUpdateEffect-D2DQ6hng.js";import"./useHasTabbableChild-KS8wc3aR.js";import"./chevron-down-BGJb7xik.js";import"./Virtualizer-fyhl1iP2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
