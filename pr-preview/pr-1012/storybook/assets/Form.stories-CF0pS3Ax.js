import{j as e}from"./iframe-Cni-JKW8.js";import{$ as c}from"./Form-ClxX9OD4.js";import{G as d}from"./Grid-Ca8N4wYc.js";import{G as i}from"./GridItem-BT7dBx5Q.js";import{T as t}from"./TextField-DCNuFXK2.js";import{S as l}from"./Select-Bwa_Rm3t.js";import{B as a}from"./Button-CLd0MwQu.js";import{R as x,a as u}from"./Radio-Dk-sGLL6.js";import{C as I}from"./CheckboxGroup-CcGF3BTV.js";import{C as G}from"./Checkbox-vfrbgKtR.js";import{L as p}from"./ListBoxItem-B15hcA_H.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BBgPw1Ze.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CuaWKPta.js";import"./useFocusRing-ecgGW1pG.js";import"./index-CCUYZc-T.js";import"./index-BOJ7Xdv4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D2ofadSf.js";import"./TextField-SmPPRKfQ.js";import"./FieldError-C2WkJOys.js";import"./Text-BaLCHv3_.js";import"./Text-DfMa_H_z.js";import"./RSPContexts-CiH3wnY5.js";import"./Group-DrVCatRc.js";import"./Input-DNaL4QBQ.js";import"./Hidden-BMEQANNf.js";import"./Button-XWhDywVU.js";import"./useLabels-CIS6hw6Q.js";import"./useButton-nRwKGbmO.js";import"./useTextField-Btzc2t-U.js";import"./useControlledState-Bv7XzANZ.js";import"./useField-BrqrTpzE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_sl_DQF.js";import"./Dialog-B5ZyDSBn.js";import"./OverlayArrow-BjOE0JB2.js";import"./useResizeObserver-BptWW6Ua.js";import"./Collection-BpA7MK-p.js";import"./index-Cf1Dkp8E.js";import"./Separator-3s4Tro7t.js";import"./SelectionManager-Cm6dwClz.js";import"./useEvent-CYtTP2RX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BErY5zrN.js";import"./useDescription-BCfpUS-d.js";import"./ListKeyboardDelegate-xFsANkrP.js";import"./PressResponder-Bv1Djsy-.js";import"./useLocalizedStringFormatter-CLIXHxcQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DC7JLxbT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D3ce5_bP.js";import"./x-Bt2kzMmd.js";import"./createLucideIcon-Bi-qWE7K.js";import"./useLocalizedStringFormatter-DhGbBMSU.js";import"./Heading-RzWY-POA.js";import"./info-DGXZYioR.js";import"./Popover-Ba-fR1yi.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BkQZAvXQ.js";import"./DragAndDrop-CnygJsHt.js";import"./inertValue-BUaVIzzt.js";import"./useListState-CyjDU-FK.js";import"./Tag-DgzpF7U_.js";import"./useHighlightSelectionDescription-C7ekZPGH.js";import"./useUpdateEffect-CuKKDA6c.js";import"./useHasTabbableChild-BEIHh3jV.js";import"./chevron-down-CvWM5-DW.js";import"./Button.module-Co5e5YHp.js";import"./check-Fb-tfZRs.js";import"./useToggleState-DHtl7u9o.js";import"./Virtualizer-CoGP57Cw.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
