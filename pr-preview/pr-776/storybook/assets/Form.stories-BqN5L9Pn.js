import{j as n}from"./iframe-DbOme9Pl.js";import{$ as j}from"./Form-t4DLhbra.js";import{G}from"./Grid-Jl7B4qvr.js";import{G as e}from"./GridItem-D7MBP8rZ.js";import{T as r}from"./TextField-DqfuclPg.js";import{S as I}from"./Select-loVRUFJO.js";import{B as a}from"./Button-o_9d0gDT.js";import{R as g,a as b}from"./Radio-BlHwVMBu.js";import{C as h}from"./CheckboxGroup-aOgIKoht.js";import{C as k}from"./Checkbox-Ec9nbhZj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BHQc-tP8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-zAv-V1ij.js";import"./useFocusRing-BnAYeb6q.js";import"./index-ILly8fBm.js";import"./index-kHv8lpBP.js";import"./TextFieldBase-D-4pwNia.js";import"./TextField-WFswxuF4.js";import"./FieldError-B9B1uhjP.js";import"./Text-BxzvQCRQ.js";import"./Text-DuL5Xhrl.js";import"./ListKeyboardDelegate-CpJFZs0T.js";import"./SelectionManager-DKHlmmpz.js";import"./useEvent-DnF908_x.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-A9jHzGYI.js";import"./useDescription-PyghoRHp.js";import"./useControlledState-CXZKd8g9.js";import"./Group-C_Pf8w06.js";import"./Input-Can7m9tw.js";import"./Hidden-D7KE367c.js";import"./Button-BHWXw1Sx.js";import"./useLabels-n31oGBKn.js";import"./useButton-BdTVgd-t.js";import"./useTextField-Czuqehu0.js";import"./useField-CNW5et5P.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-BNTTU2eP.js";import"./Dialog-C4-2v9_H.js";import"./RSPContexts-DST7Sy97.js";import"./OverlayArrow-DcuixEh_.js";import"./useResizeObserver-Cn6sOw2K.js";import"./Collection-ID8yO1jz.js";import"./index-DzewtBZ-.js";import"./Separator-CvYH9NSU.js";import"./PressResponder-BKm9xNVD.js";import"./useLocalizedStringFormatter-CXAcrH4e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DzLUNdfO.js";import"./Dialog-DRpLWUXo.js";import"./useLocalizedStringFormatter-B2wvb0Ok.js";import"./x-egWTb_C6.js";import"./createLucideIcon-CL4c1lf4.js";import"./Heading-_kEQscOg.js";import"./info-jPAuObjb.js";import"./Tag--FfNOGD8.js";import"./ListBox-DFhe0WD_.js";import"./DragAndDrop-Ca_71FqO.js";import"./inertValue-CmmkhWus.js";import"./useListState-Csh3L-hO.js";import"./useHighlightSelectionDescription-Ci6MwrpN.js";import"./useUpdateEffect-CvpSSWFY.js";import"./useHasTabbableChild-D6sZVNv9.js";import"./check-CAj_MUGn.js";import"./ListBoxSection-BDvh6qhq.js";import"./Virtualizer-Bj83F5Cn.js";import"./useObserveElement-OSaATk6C.js";import"./chevron-down-B6p0SKDy.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-DwwKn6CS.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
