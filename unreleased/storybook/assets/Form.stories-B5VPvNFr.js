import{j as n}from"./iframe-DuGV-nJg.js";import{$ as j}from"./Form-BsSlJ9Cc.js";import{G}from"./Grid-BH7aY4E1.js";import{G as e}from"./GridItem-dD2Z0Oz0.js";import{T as r}from"./TextField-DFqbxyk_.js";import{S as I}from"./Select-uQdI2uj0.js";import{B as a}from"./Button-jZCC3-mm.js";import{R as g,a as b}from"./Radio-DSe1bp7X.js";import{C as h}from"./CheckboxGroup-IOX9AGjn.js";import{C as k}from"./Checkbox-zGezADIq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DMXpxxWM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BzzUHR-d.js";import"./useFocusRing-DZevXC5x.js";import"./index-BYp4SrVV.js";import"./index-B5eSfPIC.js";import"./TextFieldBase-OQijVcKC.js";import"./TextField-FSR_fcHO.js";import"./FieldError-D8dDqKEr.js";import"./Text-DKyaOHyp.js";import"./Text-tTr5tgay.js";import"./ListKeyboardDelegate-DkChHUWM.js";import"./SelectionManager-etTHRufU.js";import"./useEvent-oeERdTLZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CAvUDr1F.js";import"./useDescription-BBE-zXAf.js";import"./useControlledState-BlnoIrZu.js";import"./Group-C9XacRPE.js";import"./Input-Dg6qivvb.js";import"./Hidden-CDWt_Hqe.js";import"./Button-CN5BzAGz.js";import"./useLabels-B9oi6BvG.js";import"./useButton-BZcqx5pu.js";import"./useTextField-iPPXikNl.js";import"./useField-DZmfhGAw.js";import"./TextField.module-DjUItNl5.js";import"./Label-xbRssyTt.js";import"./Dialog-C1EF_Civ.js";import"./RSPContexts-xz5oQOBR.js";import"./OverlayArrow-BXlck3PZ.js";import"./useResizeObserver-CYLaDcIE.js";import"./Collection-Dhd6463K.js";import"./index-C6NxZSmk.js";import"./Separator-Cl80GkkI.js";import"./PressResponder-BAyl3bG5.js";import"./useLocalizedStringFormatter-9U_wd7Wi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-GNoLuOT2.js";import"./Dialog-DIVLDi2u.js";import"./useLocalizedStringFormatter-D9zl-CR7.js";import"./x-Dbrz1_YK.js";import"./createLucideIcon-B7F13ZBn.js";import"./Heading-0PdAu9bL.js";import"./info-BKRZSSfW.js";import"./Tag-Df6aYkDj.js";import"./ListBox-CCjHZtY0.js";import"./DragAndDrop-DeJl7ieh.js";import"./inertValue-CrJ_yeH7.js";import"./useListState-QrKjb_2T.js";import"./useHighlightSelectionDescription-DSxpPvsP.js";import"./useUpdateEffect-Y8e5fOMw.js";import"./useHasTabbableChild-DOf72_Na.js";import"./check-D0ZlVQtI.js";import"./ListBoxSection-BH8cGRmF.js";import"./Virtualizer-DafNs49a.js";import"./useObserveElement-B_mx6PUb.js";import"./chevron-down-C23vk4oa.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Dul-6Otg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
