import{j as e}from"./iframe-90IRllkR.js";import{$ as c}from"./Form-DBTrq9IK.js";import{G as d}from"./Grid-CYlNdi6V.js";import{G as i}from"./GridItem-eMTxXUyc.js";import{T as t}from"./TextField-Czi_q6wl.js";import{S as l}from"./Select-BuLNWrpF.js";import{B as a}from"./Button-Bhqr8Mcz.js";import{R as x,a as u}from"./Radio-BB0wlUna.js";import{C as I}from"./CheckboxGroup-BTaUXd43.js";import{C as G}from"./Checkbox-DK6yOCb7.js";import{L as p}from"./ListBoxItem-BYqGbzcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DrgpBlOV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D-cI-26o.js";import"./useFocusRing-D9xLokmm.js";import"./index-BQ655Sgl.js";import"./index-BT0vxHj_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase--8EcAtKl.js";import"./TextField-CcH1Gewc.js";import"./FieldError-DOJlLELe.js";import"./Text-BEFgBVJd.js";import"./Text-CPIt8eLh.js";import"./RSPContexts-ewAwOmpc.js";import"./Group-BN5Q22pi.js";import"./Input-DObA0f1J.js";import"./Hidden-DTiIbjRg.js";import"./Button-DHs9eQM0.js";import"./useLabels-mqYWaiYP.js";import"./useButton-D-5xgDmf.js";import"./useTextField-6C2nssBk.js";import"./useControlledState-DZmUU_C7.js";import"./useField-krxXExoX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DcuERFfw.js";import"./Dialog-DzMgtgVX.js";import"./OverlayArrow-oVWlFfgv.js";import"./useResizeObserver-CsECYvrM.js";import"./Collection-CtKAbfrw.js";import"./index-Dsx8D9ux.js";import"./Separator-d_zf_vUQ.js";import"./SelectionManager-CmByyIgb.js";import"./useEvent-BIjQLxNz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CVvG_5B7.js";import"./useDescription-Dl1QAAnn.js";import"./ListKeyboardDelegate-C-sq8yPB.js";import"./PressResponder-2GX0tm9o.js";import"./useLocalizedStringFormatter-DKf9ituJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsHJv5_Q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-v16yXfjK.js";import"./x-G-MrfCj1.js";import"./createLucideIcon-Dz-TUHWJ.js";import"./useLocalizedStringFormatter-37ueXPbA.js";import"./Heading-Drc42Blr.js";import"./info--yAdTo-I.js";import"./Popover-f7XpZFas.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DF53iCFo.js";import"./DragAndDrop-DRUqAQSn.js";import"./inertValue-ybTeJhBc.js";import"./useListState-Dqpgwk6F.js";import"./Tag-WP1s80hW.js";import"./useHighlightSelectionDescription-CjRhk4kw.js";import"./useUpdateEffect-DtmSAJ1u.js";import"./useHasTabbableChild-Bvv2-Uvt.js";import"./chevron-down-BdfNJWP7.js";import"./Button.module-Co5e5YHp.js";import"./check-CNhwziy5.js";import"./useToggleState-nq3_9ua3.js";import"./Virtualizer-C8flqsb8.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
