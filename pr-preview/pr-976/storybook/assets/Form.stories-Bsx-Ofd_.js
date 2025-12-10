import{j as e}from"./iframe-COqMOSQZ.js";import{$ as c}from"./Form-MmG3Q7sS.js";import{G as d}from"./Grid-B2LpOxNe.js";import{G as i}from"./GridItem-BbuHeNgT.js";import{T as t}from"./TextField-E1QxDO0U.js";import{S as l}from"./Select-Cl7ms7gk.js";import{B as a}from"./Button-WZo8m9qX.js";import{R as x,a as u}from"./Radio-DykjKS_0.js";import{C as I}from"./CheckboxGroup-BCg--WTI.js";import{C as G}from"./Checkbox-CIdHGseX.js";import{L as p}from"./ListBoxItem-E8rve8ak.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UGJ7-PFb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ZZTMqVsr.js";import"./useFocusRing-J0hskc8K.js";import"./index-DAvvxpHq.js";import"./index-B56B2ZaE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DksJwfCP.js";import"./TextField-DR8QGCsW.js";import"./FieldError-DnPw9jnQ.js";import"./Text-Eq2bpnOV.js";import"./Text-Dxr2WYg8.js";import"./RSPContexts-Dj5PWvfk.js";import"./Group-CBe4eCe9.js";import"./Input-HMKvqUU6.js";import"./Hidden-C7_4vCTh.js";import"./Button-DsgoKRnG.js";import"./useLabels-ClszDTN2.js";import"./useButton-Cs35Lthr.js";import"./useTextField-C_bca6c6.js";import"./useControlledState-D0vR2tZf.js";import"./useField-Bg2RgZz3.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CM3u3xy2.js";import"./Dialog-CbXjmLSY.js";import"./OverlayArrow--TSHaOdr.js";import"./useResizeObserver-BiLq-uV0.js";import"./Collection-C4Q7pTvT.js";import"./index-Q1n7-YMV.js";import"./Separator-BR1R69TH.js";import"./SelectionManager-CiYu_tiO.js";import"./useEvent-BuGTfmKx.js";import"./scrollIntoView-DQDJTohY.js";import"./SelectionIndicator-CnCbl57Q.js";import"./useDescription-OZCat0wf.js";import"./ListKeyboardDelegate-BphbFQlv.js";import"./PressResponder-DWurSds1.js";import"./useLocalizedStringFormatter-v3zQxbki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUiggGc1.js";import"./VisuallyHidden-D6ffzidu.js";import"./x-BOXIcHuP.js";import"./createLucideIcon-Duz8ZquI.js";import"./useLocalizedStringFormatter-CXPg-yOg.js";import"./Heading-BsCY6yok.js";import"./info-CsEenOg0.js";import"./Popover-CjDw-FNZ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-gFeYpR_A.js";import"./DragAndDrop-BRduMeOz.js";import"./inertValue-DEh_xy-c.js";import"./useListState-CeRnvir7.js";import"./Tag-DzysoJIM.js";import"./useHighlightSelectionDescription-DMIedfhp.js";import"./useUpdateEffect-DAJiGZwh.js";import"./useHasTabbableChild-CtPmWrMF.js";import"./chevron-down-Dje_gAvk.js";import"./Button.module-D9QkU2r7.js";import"./check-CxzezkNI.js";import"./useToggleState-BXXRRmmu.js";import"./Virtualizer-DZ2mMA0z.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
