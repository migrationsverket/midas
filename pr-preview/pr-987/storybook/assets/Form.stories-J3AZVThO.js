import{j as e}from"./iframe-DNSuz1-z.js";import{$ as c}from"./Form-Bld6dSrY.js";import{G as d}from"./Grid-GR5jVaI2.js";import{G as i}from"./GridItem-DODmWx-Q.js";import{T as t}from"./TextField-OEGZ3obz.js";import{S as l}from"./Select-DUpRjtz7.js";import{B as a}from"./Button-BhefvJ15.js";import{R as x,a as u}from"./Radio-D7vVr7wW.js";import{C as I}from"./CheckboxGroup-B_gS7qe6.js";import{C as G}from"./Checkbox-BT2n5g4C.js";import{L as p}from"./ListBoxItem-BVSTSb7U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-PWJx94Jg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ObN1tP3z.js";import"./useFocusRing-DUN10oBW.js";import"./index-BHGRei_I.js";import"./index-BmgHOxqv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-2A7Dr-TD.js";import"./TextField-Nz4CzN6M.js";import"./FieldError-CY9cNXad.js";import"./Text-C9PGpQAM.js";import"./Text-CWb4M76d.js";import"./RSPContexts-CjMSUyUj.js";import"./Group-Dnsc7XLn.js";import"./Input-BwPr6Id2.js";import"./Hidden-DSZDj00d.js";import"./Button-DtVXVv9R.js";import"./useLabels-CD6nZf4Z.js";import"./useButton-BSiP3QIo.js";import"./useTextField-FFxIpJID.js";import"./useControlledState-AJWx4Vsn.js";import"./useField-CrjaWMvD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-KZZzBQ7E.js";import"./Dialog-1f93REq1.js";import"./OverlayArrow-C3VYGyYC.js";import"./useResizeObserver-7hVtUo3_.js";import"./Collection-Djo98snF.js";import"./index-ylBTEHcQ.js";import"./Separator-Iq-eUt-O.js";import"./SelectionManager-Dqf6gPP_.js";import"./useEvent-HiduJm6A.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Trq2vVjo.js";import"./useDescription-CNanPpTn.js";import"./ListKeyboardDelegate-Dq1u6RSH.js";import"./PressResponder-CNMT7KWf.js";import"./useLocalizedStringFormatter-Do-JPHcC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkGnqm_w.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bq8UzE34.js";import"./x-xSNmYbOw.js";import"./createLucideIcon-BPVi4m_L.js";import"./useLocalizedStringFormatter-frXD4KIA.js";import"./Heading-H63OvNx-.js";import"./info-BDvzRozh.js";import"./Popover-BkCLNS1E.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CiC4Z1QB.js";import"./DragAndDrop-BInMgA_P.js";import"./inertValue-C4gnD4-Y.js";import"./useListState-D2KcYmsx.js";import"./Tag-BuAzrC30.js";import"./useHighlightSelectionDescription-BIFO7QFE.js";import"./useUpdateEffect-DuuCxycE.js";import"./useHasTabbableChild-owwnfdw7.js";import"./chevron-down-DFfHl6RY.js";import"./Button.module-CIvIJ45H.js";import"./check-B1Kierbb.js";import"./useToggleState-CjpN2vmY.js";import"./Virtualizer-LPJaHKfz.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
