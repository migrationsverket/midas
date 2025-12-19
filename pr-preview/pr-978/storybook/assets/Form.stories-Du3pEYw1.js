import{j as e}from"./iframe-CgGNk3rw.js";import{$ as c}from"./Form-VRZWFTXK.js";import{G as d}from"./Grid-B09nltKO.js";import{G as i}from"./GridItem-C8A5bZYy.js";import{T as t}from"./TextField-Bqz9gJCo.js";import{S as l}from"./Select-DRJ7B71L.js";import{B as a}from"./Button-fl31v-Li.js";import{R as x,a as u}from"./Radio-DHLDo4HM.js";import{C as I}from"./CheckboxGroup-CkzpPsv6.js";import{C as G}from"./Checkbox-BqskeDJJ.js";import{L as p}from"./ListBoxItem-AgcNdVXq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bsla82oN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BKoqHlGb.js";import"./useFocusRing-PEhcRx0f.js";import"./index-DCKR56k8.js";import"./index-BSP806VS.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D_8mIfm7.js";import"./TextField-DdBm9X0z.js";import"./FieldError-BGEe_2Lk.js";import"./Text-CFQfYKY3.js";import"./Text-pXEnGwlG.js";import"./RSPContexts-Dw10a7j-.js";import"./Group-DF5Iy19p.js";import"./Input-DlGRkJ1B.js";import"./Hidden-YphN5jOW.js";import"./Button-BQUsf6YZ.js";import"./useLabels-CVmJxcvd.js";import"./useButton-Bxc6d1yq.js";import"./useTextField-DcNmZyWI.js";import"./useControlledState-CsvnnSan.js";import"./useField-Bz_rH_Qe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CSPedpfh.js";import"./Dialog-jR3D-z7-.js";import"./OverlayArrow-CsXCkWD1.js";import"./useResizeObserver-AfLQF_r4.js";import"./Collection-2VUtJDr5.js";import"./index-IRZBR9PL.js";import"./Separator-e8twjvqy.js";import"./SelectionManager-C7V2VW_r.js";import"./useEvent-B-jnvtdK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTFJtyNB.js";import"./useDescription-BqkAvqbm.js";import"./ListKeyboardDelegate-CrS6OjkH.js";import"./PressResponder-C2HhztG9.js";import"./useLocalizedStringFormatter-DHE3JpRj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DZrFgt0i.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dxo16egF.js";import"./x-D2WM6JD2.js";import"./createLucideIcon-DHWtI_nR.js";import"./useLocalizedStringFormatter-C6Xrjd2_.js";import"./Heading-BwJP6vZg.js";import"./info-B4jFr6we.js";import"./Popover-BYeKEkQP.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CGyIgQI5.js";import"./DragAndDrop-BFKpSSMp.js";import"./inertValue-B8EMRBwJ.js";import"./useListState-D4CA_j8J.js";import"./Tag-Cl0ODZ6L.js";import"./useHighlightSelectionDescription-BXBsipkd.js";import"./useUpdateEffect-B_OCj7cc.js";import"./useHasTabbableChild-DAEGkeI_.js";import"./chevron-down-BtnlIg7F.js";import"./Button.module-Co5e5YHp.js";import"./check-Blnc34UG.js";import"./useToggleState-CAQ7uauC.js";import"./Virtualizer-D6t16BEv.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
