import{j as e}from"./iframe-CGCgjv9i.js";import{$ as c}from"./Form-C7bp-BQR.js";import{G as d}from"./Grid-DOdWfgdE.js";import{G as i}from"./GridItem-GhZ01g9R.js";import{T as t}from"./TextField-CG4IY2EB.js";import{S as l}from"./Select-DbVfHSBf.js";import{B as a}from"./Button-Bq4ZJtTu.js";import{R as x,a as u}from"./Radio-Bzj-1HtG.js";import{C as I}from"./CheckboxGroup-DgndU_9C.js";import{C as G}from"./Checkbox-B3sjhyEc.js";import{L as p}from"./ListBoxItem-DK8gRPEy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bt4ULn4D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DOK9HYJ-.js";import"./useFocusRing-D80GeW3r.js";import"./index-C0YjKPb6.js";import"./index-Dk2Lms7e.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B1Bvogew.js";import"./TextField-DB2yurl9.js";import"./FieldError-CYmT_Yg6.js";import"./Text-B5CcvPLj.js";import"./Text-D5VsxdHk.js";import"./RSPContexts-C8DbGMi8.js";import"./Group-Xm8xeWOW.js";import"./Input-BsJ_oCah.js";import"./Hidden-FwR3hI3q.js";import"./Button-DDw9f5Fw.js";import"./useLabels-C5YCHpdk.js";import"./useButton-CcaDOEc-.js";import"./useTextField-BF9KU1Je.js";import"./useControlledState-A_vx62at.js";import"./useField-CDL7KZ6F.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-pZ0erGgL.js";import"./Dialog-w6fyAZYs.js";import"./OverlayArrow-C1mYbCIQ.js";import"./useResizeObserver-D2p3HPEZ.js";import"./Collection-CbC4cqU2.js";import"./index-Bq5okO3u.js";import"./Separator-C28i74qJ.js";import"./SelectionManager-7gEgdiXz.js";import"./useEvent-CdkR1s3U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcUdI5Qy.js";import"./useDescription-CSIGPEAb.js";import"./ListKeyboardDelegate-BWF_OYPr.js";import"./PressResponder-eqCzhHuh.js";import"./useLocalizedStringFormatter-Bxh_j9iW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lvx0w_LZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DbgfyS61.js";import"./x-D7cLG3R_.js";import"./createLucideIcon-BDDJ7gBf.js";import"./useLocalizedStringFormatter-D9GGJqnK.js";import"./Heading-wlIfGA30.js";import"./info-xzYdJSzV.js";import"./Popover-B6DtiT0c.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0GR2vF0s.js";import"./DragAndDrop-DnR9Sopq.js";import"./inertValue-Ik_YnKOD.js";import"./useListState-DEv477D2.js";import"./Tag-B2hnLewM.js";import"./useHighlightSelectionDescription-BctlNsNH.js";import"./useUpdateEffect-Bm0mznGk.js";import"./useHasTabbableChild-TbMw8RCF.js";import"./chevron-down-BZAV86pb.js";import"./Button.module-Co5e5YHp.js";import"./check-9Ov9HVK9.js";import"./useToggleState-B_EWRY0J.js";import"./Virtualizer-Bm6ocp15.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
