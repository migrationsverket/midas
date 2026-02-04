import{j as e}from"./iframe-CRW892uF.js";import{$ as c}from"./Form-sLRR6eNh.js";import{G as d}from"./Grid-BsHIGBn6.js";import{G as i}from"./GridItem-Bs1i-ukM.js";import{a as x,R as u}from"./Radio-CvMd5Et2.js";import{C as I}from"./CheckboxGroup-CuBLcDeN.js";import{C as G}from"./Checkbox-CdOtnuPF.js";import{T as t}from"./TextField-BJSaKiG_.js";import{S as l}from"./Select-DCWwGd75.js";import{L as p}from"./ListBoxItem-BC70ge-P.js";import{B as a}from"./Button-zEqn1U6h.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cy5rPxYn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CkXNtAlg.js";import"./useFocusRing-DYPhP7ff.js";import"./index-CuPhnfQx.js";import"./index-C-PwSL9X.js";import"./clsx-Ciqy0D92.js";import"./Group-C_vAYzKo.js";import"./FieldError-BQcQWUaq.js";import"./Text-BMcxzv8r.js";import"./Text-Bllz5--I.js";import"./Button-73ueEsI0.js";import"./Hidden-DVd7J3jb.js";import"./useLabels-ChrJAk9N.js";import"./useButton-DDquVdTc.js";import"./SelectionIndicator-CSS8pmUq.js";import"./useField-Dsdw6Dxh.js";import"./VisuallyHidden-DX9a97Gh.js";import"./useControlledState-C1CLjRGB.js";import"./Label-BDRgF3oC.js";import"./Dialog-BaWrtAXg.js";import"./RSPContexts-CZWpHYRK.js";import"./OverlayArrow-DVfS8oid.js";import"./useResizeObserver-BL-wr9du.js";import"./Collection-CpPeNV26.js";import"./index-Ci8Rgwt0.js";import"./Separator-DtafUiO6.js";import"./SelectionManager-BXP3sBpC.js";import"./useEvent-QBqF7ml7.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CMI78JnW.js";import"./ListKeyboardDelegate-CcvovjzQ.js";import"./PressResponder-CiN1UJyc.js";import"./useLocalizedStringFormatter-yyiVnhi3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci5wZznZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-3lOLVs8k.js";import"./createLucideIcon-B-cKx2d-.js";import"./useLocalizedStringFormatter-zR_q9Jv_.js";import"./Heading-Cf-yUcGM.js";import"./info-DCVCOli9.js";import"./Popover-DrtoZ3oB.js";import"./check-kEkOiMfE.js";import"./useToggleState-D1hdVkrs.js";import"./TextFieldBase-Bg1uH2YA.js";import"./TextField-CR6w4Yxh.js";import"./Input-H0MWE4dR.js";import"./useTextField-BQlcLRsS.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D7JuHdNI.js";import"./DragAndDrop-zxakHsFt.js";import"./inertValue-QNgVAcZQ.js";import"./useListState-BvWu-FIB.js";import"./Tag-DvPGY6WN.js";import"./useHighlightSelectionDescription-BuJWsFC4.js";import"./useUpdateEffect-B9cs1kzZ.js";import"./useHasTabbableChild-C99wTjbp.js";import"./chevron-down-B27CSHGM.js";import"./Virtualizer-CLPgkjTm.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
