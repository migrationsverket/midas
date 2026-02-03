import{j as e}from"./iframe-Yd_3Uapz.js";import{$ as c}from"./Form-BaJRF_22.js";import{G as d}from"./Grid-D5IgrqQS.js";import{G as i}from"./GridItem-CoBvEgPq.js";import{a as x,R as u}from"./Radio-QTAyHF3E.js";import{C as I}from"./CheckboxGroup-bwc1uWNQ.js";import{C as G}from"./Checkbox-D9rM8NKQ.js";import{T as t}from"./TextField-BSylrLk6.js";import{S as l}from"./Select-5U_4t_s5.js";import{L as p}from"./ListBoxItem-BfbBju0S.js";import{B as a}from"./Button-r50ETdbi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-6lRm6Tee.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BuYW0ODW.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./clsx-Ciqy0D92.js";import"./Group-CLHNLMIC.js";import"./FieldError-nG5jWdlR.js";import"./Text-Ppy1xlW_.js";import"./Text-B4Lb8X2G.js";import"./Button-CtSuRHbF.js";import"./Hidden-DV_FdnSF.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./SelectionIndicator-BrIFsEya.js";import"./useField-Cd_M8AeU.js";import"./VisuallyHidden-DlJI08Uo.js";import"./useControlledState-CcJGCIAf.js";import"./Label-DwXN3gXX.js";import"./Dialog-DCxYnSBo.js";import"./RSPContexts-E-uPdC6l.js";import"./OverlayArrow-pz_JS7iH.js";import"./useResizeObserver-DQ0HlEBx.js";import"./Collection-DOCXhwSD.js";import"./index-CP2WQlQA.js";import"./Separator-C8Dl4hGC.js";import"./SelectionManager-pVgmciQy.js";import"./useEvent-DeXrWnv_.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BugULMIn.js";import"./ListKeyboardDelegate-Cj2F-fBs.js";import"./PressResponder-BMmlZBha.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9aW9IZG.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CszsXm-U.js";import"./createLucideIcon-BG79myAo.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./Heading-B7Kjgc7K.js";import"./info-BIlvkAIz.js";import"./Popover-DQNsucQI.js";import"./check-B7cXIKOD.js";import"./useToggleState-J58ZR5dX.js";import"./TextFieldBase-CCnCel-f.js";import"./TextField-DqvcU0pp.js";import"./Input-Bz7FdIS5.js";import"./useTextField-C0KmbMod.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjcDI3pC.js";import"./DragAndDrop-6xR4XDps.js";import"./inertValue-_AoiCreQ.js";import"./useListState-BGvTffUQ.js";import"./Tag-DRHj00xV.js";import"./useHighlightSelectionDescription-DokQ1mkv.js";import"./useUpdateEffect-koX1V-4M.js";import"./useHasTabbableChild-BNBF_EDv.js";import"./chevron-down-EzOe5zCj.js";import"./Virtualizer-BPf930ME.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
