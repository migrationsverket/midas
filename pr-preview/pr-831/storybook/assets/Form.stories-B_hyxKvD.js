import{j as n}from"./iframe-CEvLaVEN.js";import{$ as j}from"./Form-CTn5KILh.js";import{G}from"./Grid-_DTnV9oH.js";import{G as e}from"./GridItem-CD-VqPs8.js";import{T as r}from"./TextField-o1isdq3s.js";import{S as I}from"./Select-DlyEUcht.js";import{B as a}from"./Button-B4laSDuD.js";import{R as g,a as b}from"./Radio-Bl3KYxLZ.js";import{C as h}from"./CheckboxGroup-smkoVygD.js";import{C as k}from"./Checkbox-BTJArCbC.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BSp-fxS2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-vDcBaxu3.js";import"./useFocusRing-BU-l4Ocl.js";import"./index-FwyS9nB-.js";import"./index-DGiio035.js";import"./TextFieldBase-CkYnwlYG.js";import"./TextField-BpAlFVqc.js";import"./FieldError-BcRK8z0n.js";import"./Text-CblLIKbO.js";import"./Text-DpULnGkh.js";import"./context-CdqpVmnE.js";import"./SelectionManager-CR387u2z.js";import"./useEvent-8nZqSeFR.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-cpkgoZ6Y.js";import"./useDescription-6IFLoqSB.js";import"./useControlledState-ChQpaTy1.js";import"./Group-1RZ71KWl.js";import"./Input-CZWQuakK.js";import"./Hidden-Dep40vQz.js";import"./Button-DMDEWzo2.js";import"./useLabels-BHzt053A.js";import"./useButton-BhXM9hkO.js";import"./useTextField-XKLvJYOr.js";import"./useField-DM4ZmM9w.js";import"./TextField.module-DjUItNl5.js";import"./Label-BUnNhlla.js";import"./Dialog-DTxpFYyy.js";import"./RSPContexts-B1BOyzT9.js";import"./OverlayArrow-VNO-VEkc.js";import"./useResizeObserver-CLL_Rl2Q.js";import"./Collection-CJ5uzV1P.js";import"./index-Os_YclTr.js";import"./Separator-J6hv3pQW.js";import"./PressResponder-BqKXBIzK.js";import"./useLocalizedStringFormatter-5OkDB-NV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BS1HvLrs.js";import"./useLocalizedStringFormatter-BNVK5IA4.js";import"./x-D_KtA-jg.js";import"./createLucideIcon-CGjcf0Bb.js";import"./Heading-DJ6rtnn1.js";import"./info-DqaQyk92.js";import"./Popover-C0ZZ02dE.js";import"./Tag-DWdjt7t-.js";import"./ListBox-DwIGKrev.js";import"./DragAndDrop-CjyIT1gp.js";import"./inertValue-DYDiPwIY.js";import"./useListState-C_UVlciA.js";import"./useHighlightSelectionDescription-BmqkiS5V.js";import"./useUpdateEffect-C_OkHR5W.js";import"./useHasTabbableChild-YOCofudS.js";import"./check-MOw7qVvK.js";import"./ListBoxSection-LFDoLTvG.js";import"./Virtualizer-C2anQuLT.js";import"./useObserveElement-Ci6qRxUV.js";import"./chevron-down-DaN0r1PC.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CTrpiELk.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
