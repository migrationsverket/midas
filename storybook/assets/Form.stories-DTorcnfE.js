import{j as e}from"./iframe-BXi2DpH_.js";import{$ as c}from"./Form-D8qdwCWa.js";import{G as d}from"./Grid-B8M0nwSi.js";import{G as i}from"./GridItem-BQqbDb8X.js";import{T as t}from"./TextField-BTT06GPX.js";import{S as l}from"./Select-z_J_3YNx.js";import{B as a}from"./Button-kzBXQJaB.js";import{R as x,a as u}from"./Radio-BSZXDlPr.js";import{C as I}from"./CheckboxGroup-WZ_qXl0z.js";import{C as G}from"./Checkbox-KDrz_lgJ.js";import{L as p}from"./ListBoxItem-DTC4hGfl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UrQDo-WA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dc7GaW6e.js";import"./useFocusRing-Bp5DTDVQ.js";import"./index-17Nv7B4H.js";import"./index-D7HPdSS2.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B56-Bhx_.js";import"./TextField-DUT5TW9V.js";import"./FieldError-DAoi_8t4.js";import"./Text-DIwVLx6b.js";import"./Text-BFe5T1zy.js";import"./RSPContexts-DF_vtBl9.js";import"./Group-cZyYk0BP.js";import"./Input-DwPxgEpe.js";import"./Hidden-D0eHPLgG.js";import"./Button-8PW_0Mpf.js";import"./useLabels-CzvTrbyR.js";import"./useButton-Dhmm4yPW.js";import"./useTextField-DSPSaBob.js";import"./useControlledState-DQtA95JU.js";import"./useField-DeikWbC4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CF2DY3e2.js";import"./Dialog-DmEdrapt.js";import"./OverlayArrow-Dz5mBhZ3.js";import"./useResizeObserver-CixoyZVD.js";import"./Collection-_V21lTNJ.js";import"./index-CoSyIhxP.js";import"./Separator-CtGHVuQj.js";import"./SelectionManager-DQXRLc7X.js";import"./useEvent-Ct55YmLp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DlNvi_i_.js";import"./useDescription-CvRpVEPx.js";import"./ListKeyboardDelegate-d2r8cszs.js";import"./PressResponder-CsT0V5Ov.js";import"./useLocalizedStringFormatter-CsL1ogvc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSjretDM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cw60I5mf.js";import"./x-mQO-tW53.js";import"./createLucideIcon-tldxpU3K.js";import"./useLocalizedStringFormatter-D1ci79sH.js";import"./Heading-BbyFkAv1.js";import"./info-B_599L4_.js";import"./Popover-D4tPeF9_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BoOKTQnW.js";import"./DragAndDrop-BQssYpZW.js";import"./inertValue-BuKV9xWv.js";import"./useListState-grnOPKoy.js";import"./Tag-Bv3zOnJM.js";import"./useHighlightSelectionDescription-DUvpLpcR.js";import"./useUpdateEffect-n_suxc1k.js";import"./useHasTabbableChild-DOjVpikV.js";import"./chevron-down-D1TMEkpp.js";import"./Button.module-Co5e5YHp.js";import"./check-Bk4SvjEK.js";import"./useToggleState-Btry2CtA.js";import"./Virtualizer-B_kPUSji.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
