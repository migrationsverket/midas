import{j as e}from"./iframe-BRBGZIqz.js";import{$ as c}from"./Form-B81Z4ziU.js";import{G as d}from"./Grid-UgKm16zp.js";import{G as i}from"./GridItem-BUdZHc92.js";import{T as t}from"./TextField-Cg4p90IS.js";import{S as l}from"./Select-CqT-q7nr.js";import{B as a}from"./Button-CNcByJgx.js";import{R as x,a as u}from"./Radio-DAxZCnND.js";import{C as I}from"./CheckboxGroup-5HRi5gC1.js";import{C as G}from"./Checkbox-D-foY6h9.js";import{L as p}from"./ListBoxItem-CmVMc4wY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-OvVzRtGp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Blap2HkA.js";import"./useFocusRing-TRszBoqc.js";import"./index-BZiahUN9.js";import"./index-D1MdiIlN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DLBbKr1q.js";import"./TextField-BuOOMDfo.js";import"./FieldError-Bvp_2QjQ.js";import"./Text-Bm57nBYX.js";import"./Text-D30cak4p.js";import"./RSPContexts-jYMRsKlw.js";import"./Group-Cq3oUKhr.js";import"./Input-BEasf9HE.js";import"./Hidden-Bjo-j34-.js";import"./Button-Di6ycfiR.js";import"./useLabels-BD_4aIe0.js";import"./useButton-DDvnlXFn.js";import"./useTextField-BxDwKNlL.js";import"./useControlledState-i1Jya0wd.js";import"./useField-BAxc47Rd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CVzSYO2Q.js";import"./Dialog-BBT71EaD.js";import"./OverlayArrow-CWhbywkE.js";import"./useResizeObserver-DTfxS9ZH.js";import"./Collection-CrIq6a7A.js";import"./index-C07XiCjk.js";import"./Separator-DcSU3lUJ.js";import"./SelectionManager-VWRCNfOh.js";import"./useEvent-MfuLXWyH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DIKMQf_F.js";import"./useDescription-CYAHXzDK.js";import"./ListKeyboardDelegate-ZZJL6dIw.js";import"./PressResponder-C75R_0pF.js";import"./useLocalizedStringFormatter-GxtkbDMC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IEUCMlX4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-V6qs-Wg7.js";import"./x-CEJ4YpOa.js";import"./createLucideIcon-9r_u-ur5.js";import"./useLocalizedStringFormatter-DdmTdBPq.js";import"./Heading-Cv-exkUw.js";import"./info-DgZB1Tjv.js";import"./Popover-BESSQ_fc.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CMOc5_Oy.js";import"./DragAndDrop-D-dLXTXI.js";import"./inertValue-BE3VmuPg.js";import"./useListState-oH5BJnaX.js";import"./Tag-C5I2mdGp.js";import"./useHighlightSelectionDescription-CamZhRI_.js";import"./useUpdateEffect-CLpVWMxf.js";import"./useHasTabbableChild-CWX_QLLK.js";import"./chevron-down-DxUzKQZ3.js";import"./Button.module-Co5e5YHp.js";import"./check-BMENk_tH.js";import"./useToggleState-MV4MVltF.js";import"./Virtualizer-D1lmwGuW.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
