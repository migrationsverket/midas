import{j as e}from"./iframe-BBs4_N6h.js";import{$ as c}from"./Form-Cwh0R2Gl.js";import{G as d}from"./Grid-BrAX3Irt.js";import{G as i}from"./GridItem-_F4WxfCl.js";import{T as t}from"./TextField-0KZeaxdU.js";import{S as l}from"./Select-kHGCSUhz.js";import{B as a}from"./Button-Bf3i2B3M.js";import{R as x,a as u}from"./Radio-CdBWZdDB.js";import{C as I}from"./CheckboxGroup-MI6_wEop.js";import{C as G}from"./Checkbox-DOC-wkrj.js";import{L as p}from"./ListBoxItem-DdxM_sqi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQWEvmcK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D4vZGBVx.js";import"./useFocusRing-C2UWZwX7.js";import"./index-DSf7Rq9d.js";import"./index-DgjA7sBY.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Btas8iz0.js";import"./TextField-CKjDO2tG.js";import"./FieldError-BhhOnxLS.js";import"./Text-Docz9roa.js";import"./Text-DQhNGrME.js";import"./RSPContexts-BwJ1wfP5.js";import"./Group-DawFOQ6D.js";import"./Input-Ci9A8tOT.js";import"./Hidden-Vg2S_tOJ.js";import"./Button-Xr6dJxVX.js";import"./useLabels-2mnglK4H.js";import"./useButton-C_pkSc3R.js";import"./useTextField-Ck-lkHHw.js";import"./useControlledState-BjCb2bRF.js";import"./useField-KR56YyQD.js";import"./TextField.module-1fNSVGjT.js";import"./Label-31m2_LGH.js";import"./Dialog-CYHI6YHZ.js";import"./OverlayArrow-B9MzykIK.js";import"./useResizeObserver-CdUTDbmG.js";import"./Collection-CmVXJPau.js";import"./index-C_ERSOhL.js";import"./Separator-BTzpOTpH.js";import"./SelectionManager-ChFtDhyR.js";import"./useEvent-Ca5WwQl8.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNOtdENK.js";import"./useDescription-C5nfsD6n.js";import"./ListKeyboardDelegate-DJHvgrIs.js";import"./PressResponder-pzaKr9_J.js";import"./useLocalizedStringFormatter-CAgc08WU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0BM_TSy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DBQc_FBH.js";import"./x-DCZtPpro.js";import"./createLucideIcon-qvf3G-BL.js";import"./useLocalizedStringFormatter-BYezl8xZ.js";import"./Heading-CEt-X43O.js";import"./info-BuGhY9bq.js";import"./Popover-C3O2hxz3.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DQik6r_V.js";import"./DragAndDrop-BpqKMJNH.js";import"./inertValue-B4E_ecjt.js";import"./useListState-fOIBAxx1.js";import"./Tag-DJ0lBR5Y.js";import"./useHighlightSelectionDescription-DDbjtlus.js";import"./useUpdateEffect-CCKcSMma.js";import"./useHasTabbableChild-O9UZS3mx.js";import"./chevron-down-B1_WzJuA.js";import"./Button.module-Co5e5YHp.js";import"./check-DeU2vXgh.js";import"./useToggleState-Czx7m8Pg.js";import"./Virtualizer-BNRhjVJx.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
