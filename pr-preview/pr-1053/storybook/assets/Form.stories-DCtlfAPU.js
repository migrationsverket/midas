import{j as e}from"./iframe-HTnyBHVP.js";import{$ as c}from"./Form-BXv3COVl.js";import{G as d}from"./Grid-6UPQA2Xo.js";import{G as i}from"./GridItem-CEdy2RDY.js";import{a as x,R as u}from"./Radio-BW39eCjg.js";import{C as I}from"./CheckboxGroup-9quTcsyr.js";import{C as G}from"./Checkbox-D-8hUgLw.js";import{T as t}from"./TextField-jz2VIP-1.js";import{S as l}from"./Select-4DhzbvdY.js";import{L as p}from"./ListBoxItem-DVnUT9XE.js";import{B as a}from"./Button-CNzpSaeX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-nUZbU1Wv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FXPeM9Pb.js";import"./useFocusRing-cQQ3mgw6.js";import"./index-0Fr-bx-l.js";import"./index-B1GoJJ0m.js";import"./clsx-Ciqy0D92.js";import"./Group-CpYlte0Z.js";import"./FieldError-W3cPolKE.js";import"./Text-C-D185rS.js";import"./Text-C2CdsLAg.js";import"./Button-D68YtQlI.js";import"./Hidden-CcyJsNu-.js";import"./useLabels-B85yUaIW.js";import"./useButton-kqwXbyL2.js";import"./SelectionIndicator-DNlfdaIc.js";import"./useField-D-1_vJxx.js";import"./VisuallyHidden-DL4mh8Hc.js";import"./useControlledState-BvewPd3v.js";import"./Label-BWhZYE3H.js";import"./Dialog-L73-GDke.js";import"./RSPContexts-CSmDHtYi.js";import"./OverlayArrow-CR_XWhPQ.js";import"./useResizeObserver-BMccFxro.js";import"./Collection-I5rDMrLQ.js";import"./index-Davix61X.js";import"./Separator-cG4CF9Fz.js";import"./SelectionManager-BOKkgdij.js";import"./useEvent-DHkhC7Ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DU_40zC-.js";import"./ListKeyboardDelegate-DecHNBR0.js";import"./PressResponder-DFLjK9LV.js";import"./useLocalizedStringFormatter-BalekKZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZId00L7.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BVS5B-gf.js";import"./createLucideIcon-D9zOPHSY.js";import"./useLocalizedStringFormatter-Pq2987gd.js";import"./Heading-DJQooB_9.js";import"./info-BNoFBGrg.js";import"./Popover-Ck3aypzP.js";import"./check-D8qXGW1Z.js";import"./useToggleState-DuLljOdu.js";import"./TextFieldBase-BSvxnWfF.js";import"./TextField-TUPZjd66.js";import"./Input-C-U9eXbx.js";import"./useTextField-DAmS8JMp.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C57_Z3B3.js";import"./DragAndDrop-CPC_DVpo.js";import"./inertValue-BRbwYgGw.js";import"./useListState-CKjBXI9K.js";import"./Tag-B438ctgm.js";import"./useHighlightSelectionDescription-zmPxQJtZ.js";import"./useUpdateEffect-BhEyxspr.js";import"./useHasTabbableChild-DKf1cKKR.js";import"./chevron-down-BSLgmw_U.js";import"./Virtualizer-D91GglG1.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
