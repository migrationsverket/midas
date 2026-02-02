import{j as e}from"./iframe-BhBYd-yz.js";import{$ as c}from"./Form-B7gnyP5J.js";import{G as d}from"./Grid-D0bES82t.js";import{G as i}from"./GridItem-vLwla3Z4.js";import{a as x,R as u}from"./Radio-Cght7rA9.js";import{C as I}from"./CheckboxGroup-CtSgUfq3.js";import{C as G}from"./Checkbox-D-ttFQS5.js";import{T as t}from"./TextField-4yQgFXAQ.js";import{S as l}from"./Select-C0kNXNQl.js";import{L as p}from"./ListBoxItem-b504WPk3.js";import{B as a}from"./Button-CltQ2OUe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dKiMTOip.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B4ppQ1b7.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./clsx-Ciqy0D92.js";import"./Group-waXQVcG1.js";import"./FieldError-6GseZL7F.js";import"./Text-Cnf9RaEJ.js";import"./Text-DPMgLSbx.js";import"./Button-BahhSbHm.js";import"./Hidden-rBTlH4Hd.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./SelectionIndicator-DwJ1FrM5.js";import"./useField-CGcAJZ4v.js";import"./VisuallyHidden-C_umXD1b.js";import"./useControlledState-BoIGYg0G.js";import"./Label-BoxF1uCt.js";import"./Dialog-NyWuhiGL.js";import"./RSPContexts-Bop_NSvS.js";import"./OverlayArrow-kiakQklW.js";import"./useResizeObserver-D7VTZ66o.js";import"./Collection-BOgrKMsb.js";import"./index--BoD9glt.js";import"./Separator-CX1_cYEp.js";import"./SelectionManager-CwhmGt3D.js";import"./useEvent-B-Flje4X.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DJAzLegN.js";import"./ListKeyboardDelegate-Bw4fFRxE.js";import"./PressResponder-B43dxFmW.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lIFkLz2v.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CK6S_-0Q.js";import"./createLucideIcon-C3sGvf5y.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./Heading-ByYP2DRA.js";import"./info-ZJ0Hq9Us.js";import"./Popover-Cr6u0eyl.js";import"./check-CYyt5Vv9.js";import"./useToggleState-CE_zRxyc.js";import"./TextFieldBase-c5QfbcG8.js";import"./TextField-DCPwzDo6.js";import"./Input-DWAI1jPw.js";import"./useTextField-DJyMp3Ou.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Drc-Ddjc.js";import"./DragAndDrop-VpDIL5h9.js";import"./inertValue-cDsk1i0K.js";import"./useListState-3YH_SH-M.js";import"./Tag-B3GMBicg.js";import"./useHighlightSelectionDescription-CAtB7bjN.js";import"./useUpdateEffect-8XVjpYUZ.js";import"./useHasTabbableChild-DkVo6tls.js";import"./chevron-down-DRGDrPw2.js";import"./Virtualizer-Dl5JVfhM.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
