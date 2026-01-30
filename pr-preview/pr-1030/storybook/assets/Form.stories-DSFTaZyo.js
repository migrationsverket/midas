import{j as e}from"./iframe-BFkYxjpi.js";import{$ as c}from"./Form-CecPzLQH.js";import{G as d}from"./Grid-cgRh3Dcv.js";import{G as i}from"./GridItem-B0UOtp73.js";import{T as t}from"./TextField-Do2xdE3L.js";import{S as l}from"./Select-BCvcRaDP.js";import{B as a}from"./Button-C3X5dVZs.js";import{R as x,a as u}from"./Radio-B8Rd_fFV.js";import{C as I}from"./CheckboxGroup-DON2a01z.js";import{C as G}from"./Checkbox-CetkY3WQ.js";import{L as p}from"./ListBoxItem-LO7Lk5rO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cvg_SbFj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CqZHtoXh.js";import"./useFocusRing-DhM4Chk4.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CnoYo3GE.js";import"./TextField-B7mKPA1H.js";import"./FieldError-CieRBtPV.js";import"./Text-B49sPC4A.js";import"./Text-f7GuBcHW.js";import"./RSPContexts-CX5DCwKf.js";import"./Group-BRz4w18Q.js";import"./Input-BEKrUVyT.js";import"./Hidden-BxbGe5dx.js";import"./Button-CPeoJlq9.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./useTextField-k3VPT5oz.js";import"./useControlledState-Jpu9zhJ4.js";import"./useField-B0sWGxFk.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DM1O0_Ct.js";import"./Dialog-B9a7SUZC.js";import"./OverlayArrow-ILsMLnhq.js";import"./useResizeObserver-D3KF8nv8.js";import"./Collection-BK1fJAbU.js";import"./index-B4kv5YcN.js";import"./Separator-kJ6KgcrU.js";import"./SelectionManager-BEe4ixjS.js";import"./useEvent-C1J2zTQJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-hnY6KiAM.js";import"./useDescription-BbdIQJUv.js";import"./ListKeyboardDelegate-BhusCfZS.js";import"./PressResponder-Bc2YRcYe.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YwsPYOCI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKZ765x3.js";import"./x-D-DQfH5Z.js";import"./createLucideIcon-Dk_ZVBqn.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";import"./Heading-CyhYxcEs.js";import"./info-CoC7mICA.js";import"./Popover-C2aZ7GTb.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BC-rnCD8.js";import"./DragAndDrop-CHmEgGRC.js";import"./inertValue-eaazUsso.js";import"./useListState-1-SFXg4l.js";import"./Tag-BOxN5COH.js";import"./useHighlightSelectionDescription-CldCXw9U.js";import"./useUpdateEffect-Ck8gwo2m.js";import"./useHasTabbableChild-V7nQu15x.js";import"./chevron-down-oQj_VAxe.js";import"./Button.module-Co5e5YHp.js";import"./check-D0L5Hkv2.js";import"./useToggleState-Ba6EMyZH.js";import"./Virtualizer-D9PUmDt3.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
