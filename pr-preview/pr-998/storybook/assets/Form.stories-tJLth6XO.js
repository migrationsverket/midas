import{j as e}from"./iframe-DLcF_cZb.js";import{$ as c}from"./Form-DNQ-f3m0.js";import{G as d}from"./Grid-C9uuASNU.js";import{G as i}from"./GridItem-Cmp9RJw5.js";import{T as t}from"./TextField-Cl0JUUQa.js";import{S as l}from"./Select-fDoqjh_c.js";import{B as a}from"./Button-BbPLdLku.js";import{R as x,a as u}from"./Radio-CU9D0EKu.js";import{C as I}from"./CheckboxGroup-B08uy4m5.js";import{C as G}from"./Checkbox-Bwn-MMn5.js";import{L as p}from"./ListBoxItem-Czl2svxo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DopDDGwO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNRHJKth.js";import"./useFocusRing-Dmrd4B4C.js";import"./index-B7geH7_-.js";import"./index-DK_aNcXz.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BJU7HSVd.js";import"./TextField-Ce2gSEpV.js";import"./FieldError-BM5NpMS1.js";import"./Text-B98yE2PT.js";import"./Text-Dh2DNKMg.js";import"./RSPContexts-CTdkxWNV.js";import"./Group-C2h2G8mR.js";import"./Input-CP4jwPM3.js";import"./Hidden-BmcCzQFm.js";import"./Button-BirpzH-3.js";import"./useLabels-BmzKzWd6.js";import"./useButton-CBJTXxEE.js";import"./useTextField-BzMeu8et.js";import"./useControlledState-BjUzWb5o.js";import"./useField-Bnx6_ry5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DG6ahEDM.js";import"./Dialog-BcXqbI84.js";import"./OverlayArrow-Cfn4lJ8Z.js";import"./useResizeObserver-BPN23z2n.js";import"./Collection-BeAco00g.js";import"./index-BwM4ZsvQ.js";import"./Separator-CabJx4mN.js";import"./SelectionManager-WvjmUz1m.js";import"./useEvent-6YdTv-vL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IjtRpl3q.js";import"./useDescription-Boa-MxLe.js";import"./ListKeyboardDelegate-BsPbU2Dn.js";import"./PressResponder-DI04bVwx.js";import"./useLocalizedStringFormatter-CschDt8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-7Dnmrw8M.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-SdRNs5sP.js";import"./x-YRI_uR-l.js";import"./createLucideIcon-Bv8IvF6P.js";import"./useLocalizedStringFormatter-CfNFAn3n.js";import"./Heading-CdMiYJad.js";import"./info-BvPC3fJN.js";import"./Popover-B2kGklUs.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-aob9f9WZ.js";import"./DragAndDrop-CmzXNTop.js";import"./inertValue-DZ_RdgLi.js";import"./useListState-blGAQlsJ.js";import"./Tag-nE1_nCZb.js";import"./useHighlightSelectionDescription-C39G7Uhh.js";import"./useUpdateEffect-Bg6kePg1.js";import"./useHasTabbableChild-DlcZYuFy.js";import"./chevron-down-CeILwhup.js";import"./Button.module-Co5e5YHp.js";import"./check-CUkha0Yt.js";import"./useToggleState-CL34mAtN.js";import"./Virtualizer-CA-Ew7eQ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
