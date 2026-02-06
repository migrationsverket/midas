import{j as e}from"./iframe-D9Rzgh85.js";import{$ as c}from"./Form-CRKWl6Li.js";import{G as d}from"./Grid-S_UsBcWH.js";import{G as i}from"./GridItem-C-gpk8_A.js";import{a as x,R as u}from"./Radio-D6cPPZma.js";import{C as I}from"./CheckboxGroup-Qd5lso3C.js";import{C as G}from"./Checkbox-BxJ6kTAX.js";import{T as t}from"./TextField-DVNKbnrK.js";import{S as l}from"./Select-C13DioZ9.js";import{L as p}from"./ListBoxItem-BmkYhDtw.js";import{B as a}from"./Button-GEwt1th_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CcE3691I.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-COs17kb9.js";import"./useFocusRing-qy6wHmp4.js";import"./index-DmQawtna.js";import"./index-BrMoY6nn.js";import"./clsx-Ciqy0D92.js";import"./Group-DxxaLLBU.js";import"./FieldError-CIzKS9xI.js";import"./Text-3qget8RN.js";import"./Text-Dd2X_hQM.js";import"./Button-D5VXQBoK.js";import"./Hidden-CRl_n9Jn.js";import"./useLabels-nvjoqgK_.js";import"./useButton-C4LQsEB7.js";import"./SelectionIndicator-D5vxYoQH.js";import"./useField-ERXTV_bg.js";import"./VisuallyHidden-DYBD2kzd.js";import"./useControlledState-CJh_WJgv.js";import"./Label-DfuIxZjb.js";import"./Dialog-N6V9u_U2.js";import"./RSPContexts-BGjvgK0i.js";import"./OverlayArrow-BHYGRK-D.js";import"./useResizeObserver-DoBpt9B9.js";import"./Collection-DMed_n8m.js";import"./index-HofzEjLI.js";import"./Separator-C0hgMUAF.js";import"./SelectionManager-CQQ-Z0Yf.js";import"./useEvent-Ckf4GrX8.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BM34yKeA.js";import"./ListKeyboardDelegate-1FTpva9b.js";import"./PressResponder-DaL2aiQ9.js";import"./useLocalizedStringFormatter-Dq7J19BW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAqKh2LB.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DysO00qF.js";import"./createLucideIcon-Cr-DKDH9.js";import"./useLocalizedStringFormatter-DjQyT7Ji.js";import"./Heading-CbGso2BQ.js";import"./info-B2DyfrxR.js";import"./Popover-B_CkSEtm.js";import"./check-BNbITDRN.js";import"./useToggleState-mu75BpDn.js";import"./TextFieldBase-P1OGfsO3.js";import"./TextField-C7zAvpA4.js";import"./Input-Ds06qH0V.js";import"./useTextField-D11QcTuD.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CT8NSr31.js";import"./DragAndDrop-BwZTndVs.js";import"./inertValue-CdmXLuUO.js";import"./useListState-DTKjTzW4.js";import"./Tag-DoVKGilu.js";import"./useHighlightSelectionDescription-OIzlzQud.js";import"./useUpdateEffect-C71n-Tjr.js";import"./useHasTabbableChild-BjnpMqbB.js";import"./chevron-down-hs7vYJEU.js";import"./Virtualizer-BKFadn4a.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
